import { services } from "@/lib/data";
import SectionHead from "./SectionHead";

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-panel">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHead
          num="02"
          eyebrow="What we do"
          title="Engineering for the production era of AI."
          intro="Six service lines, one promise: every engagement is scoped to a measurable business outcome — not a deliverable that sits in a deck."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="bg-paper p-7">
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
