import { apps } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Apps() {
  return (
    <section id="apps" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead
        num="01"
        eyebrow="Our products"
        title="We build what we sell."
        intro="Two consumer AI apps, live and paying real users in India. Everything we learn about reliability, cost and governance flows back into the systems we build for clients."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {apps.map((app, idx) => (
          <article
            key={app.name}
            className="flex flex-col rounded-2xl border border-line bg-card p-7 transition-colors hover:border-ink sm:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                {app.status}
              </span>
            </div>

            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight">
              {app.name}
            </h3>
            <p className="mt-1 font-display text-base font-semibold text-muted">
              {app.tagline}
            </p>
            <p className="mt-4 flex-1 leading-relaxed text-muted">{app.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {app.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-panel px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {app.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    link.primary
                      ? "rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
                      : "rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-panel"
                  }
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
