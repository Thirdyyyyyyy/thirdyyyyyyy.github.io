"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status.kind === "sending") return;

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, website }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setStatus({
          kind: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      setStatus({ kind: "sent" });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({
        kind: "error",
        message: "Network error. Please try again.",
      });
    }
  }

  const disabled = status.kind === "sending";

  return (
    <form onSubmit={submit} className="grid gap-4">
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Name
          </span>
          <input
            type="text"
            required
            minLength={2}
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={disabled}
            className="rounded-xl border border-canvas-border bg-canvas-card px-4 py-2.5 text-sm text-ink shadow-soft outline-none transition placeholder:text-ink-faint focus:border-pastel-blue-dark focus:ring-2 focus:ring-pastel-blue/30 disabled:opacity-60"
            placeholder="Jane Doe"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Email
          </span>
          <input
            type="email"
            required
            maxLength={200}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={disabled}
            className="rounded-xl border border-canvas-border bg-canvas-card px-4 py-2.5 text-sm text-ink shadow-soft outline-none transition placeholder:text-ink-faint focus:border-pastel-blue-dark focus:ring-2 focus:ring-pastel-blue/30 disabled:opacity-60"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Message
        </span>
        <textarea
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={disabled}
          className="resize-y rounded-xl border border-canvas-border bg-canvas-card px-4 py-2.5 text-sm text-ink shadow-soft outline-none transition placeholder:text-ink-faint focus:border-pastel-blue-dark focus:ring-2 focus:ring-pastel-blue/30 disabled:opacity-60"
          placeholder="Tell me about your project…"
        />
        <span className="text-right text-xs text-ink-faint">
          {message.length}/4000
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={disabled}
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-soft disabled:opacity-60"
        >
          {status.kind === "sending" ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/50 border-t-white" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <span className="transition group-hover:translate-x-0.5">→</span>
            </>
          )}
        </button>

        {status.kind === "sent" && (
          <span className="text-sm text-emerald-600">
            ✓ Sent — I&rsquo;ll get back to you soon.
          </span>
        )}
        {status.kind === "error" && (
          <span className="text-sm text-red-500">{status.message}</span>
        )}
      </div>

      <p className="text-xs text-ink-faint">
        Rate-limited to 3 messages per hour per IP. No data is stored beyond
        delivery.
      </p>
    </form>
  );
}
