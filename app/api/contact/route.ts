import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

export const runtime = "nodejs";

const hasRatelimit =
  !!process.env.UPSTASH_REDIS_REST_URL &&
  !!process.env.UPSTASH_REDIS_REST_TOKEN;

const ratelimit = hasRatelimit
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(3, "1 h"),
      prefix: "contact",
      analytics: true,
    })
  : null;

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

export async function POST(req: NextRequest) {
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

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anon";

  if (ratelimit) {
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        {
          error: "Too many messages. Please try again later.",
          limit,
          remaining,
          reset,
        },
        { status: 429 },
      );
    }
  }

  try {
    await resend!.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (err) {
    console.error("resend send failed", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
