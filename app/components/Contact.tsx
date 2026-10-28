"use client";

import { useState } from "react";
import { company } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(company.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = company.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* clipboard unavailable */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <div className="font-mono text-xs uppercase tracking-[0.12em] text-paper/60">
          Ready when you are
        </div>

        <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Let’s get your AI past the pilot.
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-paper/70">
          Tell us the outcome you’re trying to deliver. We’ll come back within one business
          day with whether we’re the right team — and what a first engagement could look
          like.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={copyEmail}
            className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            Book a 30-minute strategy call →
          </button>
          <button
            type="button"
            onClick={copyEmail}
            className="font-mono text-sm text-paper/80 underline-offset-4 transition-colors hover:text-paper hover:underline"
          >
            {company.email}
          </button>
        </div>

        <p
          className="mt-4 h-4 font-mono text-xs text-paper/60"
          aria-live="polite"
        >
          {copied ? "✓ Email copied to clipboard" : "Tap either to copy our email"}
        </p>

        <p className="mt-6 font-mono text-xs text-paper/50">
          No NDAs to start · No procurement maze · One technologist on the first call
        </p>
      </div>
    </section>
  );
}
