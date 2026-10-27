import { company } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-void">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-raised font-display text-sm font-bold text-accent">
                A
              </span>
              <span className="font-display text-lg font-bold tracking-tight">algomise</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              An AI company built for the production era. We engineer GenAI and Agentic AI
              systems — for our own products, and for businesses ready to move past the
              prototype.
            </p>
            <div className="mt-5 font-mono text-xs leading-relaxed text-muted">
              <div className="text-ink">{company.legalName}</div>
              <div>LLPIN · {company.llpin}</div>
              {company.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {company.products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink transition-colors hover:text-accent"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {company.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} {company.legalName} · New Delhi, India</span>
          <span className="text-ice">Intelligence, engineered.</span>
        </div>
      </div>
    </footer>
  );
}
