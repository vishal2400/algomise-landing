export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* subtle electric glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          AI · Generative AI · Agentic AI
        </span>

        <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Most AI pilots never ship.{" "}
          <span className="text-accent">We engineer</span>{" "}
          <span className="text-ice">the ones that do.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Algomise builds, deploys and operates GenAI and Agentic AI systems — for our
          own products, and for businesses ready to move past the prototype.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-[#05080f] transition-opacity hover:opacity-90"
          >
            Book a strategy call →
          </a>
          <a
            href="#apps"
            className="rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent"
          >
            See our apps
          </a>
        </div>

        <div className="mt-10 inline-block rounded-xl border border-line bg-surface px-4 py-3 font-mono text-xs leading-relaxed text-muted">
          status: <span className="text-ice">pilot → production</span>
          <br />
          eval: passing · cost: bounded · governance: on
        </div>
      </div>
    </section>
  );
}
