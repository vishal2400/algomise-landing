import { nav } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/30 bg-paper/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] backdrop-blur-2xl backdrop-saturate-200">
      <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9 text-ink" />
          <span className="font-display text-2xl font-bold tracking-tight">algomise</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={nav.cta.href}
            className="rounded-full bg-ink px-5 py-2.5 text-base font-semibold text-paper transition-opacity hover:opacity-90"
          >
            {nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
