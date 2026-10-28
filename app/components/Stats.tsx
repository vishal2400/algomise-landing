"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setRun(true);
            io.disconnect();
          }
        }),
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-px overflow-hidden bg-paper/15 sm:grid-cols-3">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, run }: { stat: (typeof stats)[number]; run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setN(stat.value);
      return;
    }
    const dur = 1600;
    const t0 = performance.now();
    const id = setInterval(() => {
      const p = Math.min((performance.now() - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(eased * stat.value));
      if (p >= 1) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [run, stat.value]);

  return (
    <div className="bg-ink px-4 py-10 text-center sm:py-12">
      <div className="font-display text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">
        {stat.prefix}
        {n}
        {stat.suffix}
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-paper/60">
        {stat.label}
      </div>
    </div>
  );
}
