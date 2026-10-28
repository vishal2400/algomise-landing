export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Algomise"
    >
      <path
        d="M9 40 L24 9 L39 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="31" r="5" fill="currentColor" />
    </svg>
  );
}
