import { apps } from "@/lib/data";

export default function Apps() {
  return (
    <section id="apps" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          Our products
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          We build what we sell.
        </h2>
        <p className="mt-4 text-muted">
          Two consumer AI apps, live and paying real users in India. Everything we learn
          about reliability, cost and governance flows back into the systems we build for
          clients.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {apps.map((app) => (
          <article
            key={app.name}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent sm:p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <h3
                className={`font-display text-2xl font-bold tracking-tight ${
                  app.accent === "accent" ? "text-accent" : "text-ice"
                }`}
              >
                {app.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {app.status}
              </span>
            </div>

            <p className="mt-1 font-display text-base font-semibold text-ink">
              {app.tagline}
            </p>
            <p className="mt-4 flex-1 leading-relaxed text-muted">{app.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {app.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-raised px-2.5 py-1 font-mono text-[11px] text-muted"
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
                      ? "rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-[#05080f] transition-opacity hover:opacity-90"
                      : "rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent"
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
