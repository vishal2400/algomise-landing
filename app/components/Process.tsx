import { process } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHead
        num="03"
        eyebrow="How we work"
        title="A four-step process built for AI’s failure modes."
        intro="Predictable cadence, production outcomes. One page that says what we’re building, why, and how we’ll measure it."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <div key={p.step} className="rounded-2xl border border-line bg-card p-6">
            <div className="font-mono text-sm text-muted">{p.step}</div>
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
