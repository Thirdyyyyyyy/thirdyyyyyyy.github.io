import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

export const runtime = "nodejs";

const BURST_LIMIT = 10;
const BURST_WINDOW_MS = 10 * 60 * 1000;
const SEND_LIMIT = 3;
const SEND_WINDOW_MS = 60 * 60 * 1000;

const hasRatelimit =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

const redis = hasRatelimit ? Redis.fromEnv() : null;

const burstRatelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(BURST_LIMIT, "10 m"),
      prefix: "contact:burst",
      analytics: true,
    })
  : null;

const sendRatelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(SEND_LIMIT, "1 h"),
      prefix: "contact:send",
      analytics: true,
    })
  : null;

type LimitResult = { success: boolean; remaining: number; reset: number };

const MEMORY_MAX_KEYS = 5000;

/**
 * Per-instance fallback for when Upstash is not configured. A serverless
 * instance holds its own map and loses it on recycle, so this is weaker than
 * the Redis limiter — it exists so the endpoint is never completely unthrottled.
 */
function createMemoryLimiter(limit: number, windowMs: number) {
  const hits = new Map<string, number[]>();

  function prune(now: number) {
    for (const [key, timestamps] of hits) {
      const live = timestamps.filter((t) => t > now - windowMs);
      if (live.length === 0) hits.delete(key);
      else hits.set(key, live);
    }
  }

  return {
    check(key: string): LimitResult {
      const now = Date.now();
      if (hits.size > MEMORY_MAX_KEYS) prune(now);

      const live = (hits.get(key) ?? []).filter((t) => t > now - windowMs);

      if (live.length >= limit) {
        return { success: false, remaining: 0, reset: live[0] + windowMs };
      }

      live.push(now);
      hits.set(key, live);
      return {
        success: true,
        remaining: limit - live.length,
        reset: now + windowMs,
      };
    },
  };
}

const burstMemory = createMemoryLimiter(BURST_LIMIT, BURST_WINDOW_MS);
const sendMemory = createMemoryLimiter(SEND_LIMIT, SEND_WINDOW_MS);

const hasResend = !!process.env.RESEND_API_KEY;
const resend = hasResend ? new Resend(process.env.RESEND_API_KEY) : null;

const CONTACT_FROM =
  process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";
const CONTACT_TO = process.env.CONTACT_TO ?? "hhudieres7@gmail.com";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string; // honeypot
};

function badRequest(msg: string) {
  return NextResponse.json({ error: msg }, { status: 400 });
}

function tooMany(msg: string, result: LimitResult) {
  return NextResponse.json(
    { error: msg, remaining: result.remaining, reset: result.reset },
    {
      status: 429,
      headers: {
        "Retry-After": String(
          Math.max(1, Math.ceil((result.reset - Date.now()) / 1000)),
        ),
      },
    },
  );
}

function clientIp(req: NextRequest) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anon"
  );
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);

  // Throttle every attempt, valid or not, so malformed payloads cannot be
  // used to hammer the endpoint for free.
  const burst = burstRatelimit
    ? await burstRatelimit.limit(ip)
    : burstMemory.check(ip);

  if (!burst.success) {
    return tooMany("Too many requests. Please slow down.", burst);
  }

  if (!hasResend) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured yet. Set RESEND_API_KEY, CONTACT_FROM, and CONTACT_TO.",
      },
      { status: 503 },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return badRequest("Invalid JSON.");
  }

  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || name.length < 2 || name.length > 80) {
    return badRequest("Please enter your name (2–80 characters).");
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return badRequest("Please enter a valid email.");
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return badRequest("Message must be 10–4000 characters.");
  }

  // Only a well-formed message consumes the send quota, so a typo does not
  // cost the visitor one of their three messages.
  const send = sendRatelimit
    ? await sendRatelimit.limit(ip)
    : sendMemory.check(ip);

  if (!send.success) {
    return tooMany("Too many messages. Please try again later.", send);
  }

  // The Resend SDK resolves with { data, error } rather than throwing on an
  // API rejection, so the error field must be checked explicitly. The catch
  // only covers transport-level failures.
  try {
    const { error } = await resend!.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("resend rejected send", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("resend send threw", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
