/* Grayscale abstract "3D render" placeholders — fixed tones so they read
   like images in both light and dark mode. Swap for real renders later. */

const BG = "#d9d8d3";
const DARK = "#3a3a38";
const MID = "#8a8a86";
const LIGHT = "#cfcec9";
const HI = "#f2f1ec";

function Frame({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={`Abstract render ${id}`} className="h-full w-full">
      <rect width="100" height="100" fill={BG} />
      {children}
    </svg>
  );
}

function Sphere() {
  return (
    <Frame id="sphere">
      <defs>
        <radialGradient id="s0" cx="38%" cy="34%" r="72%">
          <stop offset="0%" stopColor={HI} />
          <stop offset="55%" stopColor={MID} />
          <stop offset="100%" stopColor={DARK} />
        </radialGradient>
      </defs>
      <ellipse cx="52" cy="82" rx="30" ry="6" fill={DARK} opacity="0.25" />
      <circle cx="50" cy="46" r="30" fill="url(#s0)" />
      <path d="M50 16a30 30 0 0 1 22 50 30 30 0 0 0-38-44 30 30 0 0 1 16-6z" fill={HI} opacity="0.18" />
    </Frame>
  );
}

function Balance() {
  return (
    <Frame id="balance">
      <defs>
        <radialGradient id="s1" cx="40%" cy="36%" r="70%">
          <stop offset="0%" stopColor={LIGHT} />
          <stop offset="100%" stopColor={MID} />
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="84" rx="26" ry="5" fill={DARK} opacity="0.25" />
      <circle cx="50" cy="58" r="24" fill="url(#s1)" />
      <g transform="rotate(14 50 30)">
        <rect x="40" y="18" width="22" height="22" fill={DARK} />
        <rect x="40" y="18" width="22" height="22" fill={HI} opacity="0.12" />
      </g>
    </Frame>
  );
}

function Stack() {
  return (
    <Frame id="stack">
      <defs>
        <linearGradient id="s2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={LIGHT} />
          <stop offset="50%" stopColor={MID} />
          <stop offset="100%" stopColor={DARK} />
        </linearGradient>
      </defs>
      <ellipse cx="52" cy="86" rx="30" ry="5" fill={DARK} opacity="0.22" />
      <rect x="20" y="40" width="30" height="42" fill="url(#s2)" />
      <ellipse cx="35" cy="40" rx="15" ry="5" fill={HI} />
      <ellipse cx="35" cy="82" rx="15" ry="5" fill={DARK} />
      <polygon points="68,82 80,44 92,82" fill={MID} />
      <polygon points="68,82 80,44 80,82" fill={DARK} opacity="0.55" />
    </Frame>
  );
}

function Split() {
  return (
    <Frame id="split">
      <defs>
        <linearGradient id="s3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={HI} />
          <stop offset="100%" stopColor={DARK} />
        </linearGradient>
        <clipPath id="c3">
          <circle cx="50" cy="50" r="32" />
        </clipPath>
      </defs>
      <g clipPath="url(#c3)">
        <rect width="100" height="100" fill="url(#s3)" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={i} x={18 + i * 6.4} y="18" width="3.2" height="64" fill={DARK} opacity={0.12 + i * 0.03} />
        ))}
      </g>
      <circle cx="50" cy="50" r="32" fill="none" stroke={DARK} strokeWidth="0.6" opacity="0.4" />
    </Frame>
  );
}

function Cluster() {
  const dots: { x: number; y: number }[] = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      dots.push({ x: 30 + c * 10, y: 30 + r * 10 });
    }
  }
  return (
    <Frame id="cluster">
      <ellipse cx="50" cy="86" rx="26" ry="4" fill={DARK} opacity="0.2" />
      {dots.map((d, i) => {
        const dist = Math.hypot(d.x - 50, d.y - 55);
        if (dist > 26) return null;
        const shade = dist < 10 ? DARK : dist < 18 ? MID : LIGHT;
        return <circle key={i} cx={d.x} cy={d.y} r="4.4" fill={shade} />;
      })}
    </Frame>
  );
}

const VARIANTS = [Sphere, Balance, Stack, Split, Cluster];

export default function AbstractArt({ variant }: { variant: number }) {
  const Art = VARIANTS[variant % VARIANTS.length];
  return <Art />;
}
