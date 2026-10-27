import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden bg-line lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper px-4 py-10 text-center sm:py-12">
              <div className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
