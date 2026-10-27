import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          How we work
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          A four-step process built for AI&apos;s failure modes.
        </h2>
        <p className="mt-4 text-muted">
          Predictable cadence, production outcomes. One page that says what we&apos;re
          building, why, and how we&apos;ll measure it.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <div key={p.step} className="rounded-2xl border border-line bg-surface p-6">
            <div className="font-mono text-sm text-accent">{p.step}</div>
            <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
