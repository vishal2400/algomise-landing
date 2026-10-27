export default function SectionHead({
  num,
  eyebrow,
  title,
  intro,
}: {
  num: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        <span>{num}</span>
        <span className="h-px w-8 bg-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}
