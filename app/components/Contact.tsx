import { company } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          Ready when you are
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Let&apos;s get your AI past the pilot.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Tell us the outcome you&apos;re trying to deliver. We&apos;ll come back within one
          business day with whether we&apos;re the right team — and what a first engagement
          could look like.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${company.email}`}
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-[#05080f] transition-opacity hover:opacity-90"
          >
            Book a 30-minute strategy call →
          </a>
          <a
            href={`mailto:${company.email}`}
            className="font-mono text-sm text-ice transition-colors hover:text-ink"
          >
            {company.email}
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-muted">
          No NDAs to start · No procurement maze · One technologist on the first call
        </p>
      </div>
    </section>
  );
}
