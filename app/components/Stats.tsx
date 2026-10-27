import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-8 text-center sm:py-10">
            <div className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
