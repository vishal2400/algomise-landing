import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            What we do
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering for the production era of AI.
          </h2>
          <p className="mt-4 text-muted">
            Six service lines, one promise: every engagement is scoped to a measurable
            business outcome — not a deliverable that sits in a deck.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="bg-void p-7">
              <span className="font-mono text-xs text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
