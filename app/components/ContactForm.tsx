"use client";

import { useEffect, useRef, useState } from "react";

export const OPEN_CONTACT_EVENT = "algomise:open-contact";

export function openContactForm() {
  window.dispatchEvent(new CustomEvent(OPEN_CONTACT_EVENT));
}

type Status = "idle" | "submitting" | "done" | "error";

export default function ContactForm() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_CONTACT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONTACT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    // let the close animation/reset settle before clearing the result view
    window.setTimeout(() => setStatus("idle"), 200);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new URLSearchParams();
    data.append("form-name", "contact");
    new FormData(form).forEach((value, key) => data.append(key, value.toString()));

    setStatus("submitting");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Connect with Algomise"
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="my-auto w-full max-w-lg rounded-2xl border border-line bg-paper text-ink shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <h2 className="font-display text-lg font-bold tracking-tight">
            Connect with Algomise
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="rounded-full p-1.5 text-muted transition-colors hover:bg-panel hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {status === "done" ? (
          <div className="px-6 py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-panel">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="mt-4 font-display text-lg font-semibold">Thanks — message received.</p>
            <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
              We’ll get back to you on email within one business day.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-6 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="px-6 py-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">
                  Full name <span className="text-red-500">*</span>
                </span>
                <input
                  ref={firstFieldRef}
                  name="name"
                  type="text"
                  required
                  placeholder="Priya Sharma"
                  className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="priya@company.com"
                  className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Phone / WhatsApp</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 ·····"
                  className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Company / org</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Acme Pvt Ltd"
                  className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-ink"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">
                  Reaching out about <span className="text-red-500">*</span>
                </span>
                <select
                  name="topic"
                  required
                  className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-ink"
                >
                  <option value="">Select one…</option>
                  <option>AI project / consulting</option>
                  <option>Partnership</option>
                  <option>App support — CoinJeeto / CashBoo</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium">Budget range</span>
                <select
                  name="budget"
                  className="mt-1.5 w-full rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-ink"
                >
                  <option>Not sure yet</option>
                  <option>Under ₹5L</option>
                  <option>₹5L – ₹20L</option>
                  <option>₹20L +</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </span>
              <textarea
                name="message"
                required
                rows={3}
                placeholder="Tell us the outcome you’re after…"
                className="mt-1.5 w-full resize-y rounded-lg border border-line bg-card px-3 py-2 text-sm outline-none transition-colors focus:border-ink"
              />
            </label>

            <label className="mt-4 flex items-start gap-2.5">
              <input
                name="consent"
                type="checkbox"
                value="yes"
                required
                className="mt-0.5 h-4 w-4 accent-[currentColor]"
              />
              <span className="text-sm leading-relaxed text-muted">
                I agree to be contacted by Algomise about this enquiry.{" "}
                <span className="text-red-500">*</span>
              </span>
            </label>

            {status === "error" && (
              <p className="mt-4 text-sm text-red-500" aria-live="polite">
                Something went wrong. Please try again, or email hello@algomise.com.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-5 w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
