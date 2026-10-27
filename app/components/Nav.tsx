import { nav } from "@/lib/data";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-raised font-display text-sm font-bold text-accent">
            A
          </span>
          <span className="font-display text-lg font-bold tracking-tight">algomise</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={nav.cta.href}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-[#05080f] transition-opacity hover:opacity-90"
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
