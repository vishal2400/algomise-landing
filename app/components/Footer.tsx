import { company } from "@/lib/data";
import Logo from "./Logo";
import ConnectList from "./ConnectList";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-14 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[3fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-7 w-7 text-ink" />
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
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {company.services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {company.products.map((p) => (
                <li key={p.label}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink transition-colors hover:text-muted"
                    >
                      {p.label}
                    </a>
                  ) : (
                    <span className="text-muted">{p.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
              Connect
            </h4>
            <ConnectList items={company.connect} />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} {company.legalName} · New Delhi, India
          </span>
          <span className="text-ink">Intelligence, engineered.</span>
        </div>
      </div>
    </footer>
  );
}
