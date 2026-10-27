import AbstractArt from "./AbstractArt";

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
      <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>Intelligence, engineered.</span>
        <span className="hidden sm:inline">AI · GenAI · Agentic AI</span>
      </div>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <h1 className="max-w-2xl text-balance font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
          Intelligence,
          <br />
          engineered.
        </h1>
        <div className="max-w-xs lg:text-right">
          <p className="font-display text-sm font-semibold leading-snug text-ink">
            Production-grade GenAI &amp; Agentic AI — for businesses, and shipped in our
            own consumer apps.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted lg:justify-end">
            <span>New Delhi</span>
            <span>Global delivery</span>
            <span>24h response</span>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-lg border border-line bg-panel"
          >
            <AbstractArt variant={i} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
          >
            Book a strategy call →
          </a>
          <a
            href="#apps"
            className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-panel"
          >
            See our apps
          </a>
        </div>
        <p className="max-w-md text-base leading-relaxed text-muted lg:text-right">
          Algomise builds, deploys and operates GenAI and Agentic AI systems — for our own
          products, and for businesses ready to move past the prototype.
        </p>
      </div>
    </section>
  );
}
