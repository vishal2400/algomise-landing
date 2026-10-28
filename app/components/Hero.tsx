import Image from "next/image";
import showcaseDark from "@/public/apps-showcase.webp";
import showcaseLight from "@/public/apps-showcase-light.webp";

export default function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
      <h1 className="font-display text-[clamp(28px,5vw,56px)] font-extrabold leading-[1.08] tracking-tight">
        <span className="block">Most AI pilots never ship.</span>
        <span className="block text-muted">We engineer the ones that do.</span>
      </h1>

      <div className="relative mt-12 overflow-hidden rounded-2xl">
        <Image
          src={showcaseLight}
          alt="CoinJeeto and CashBoo — our live consumer AI apps"
          priority
          className="block h-auto w-full dark:hidden"
          sizes="(max-width: 768px) 100vw, 1120px"
        />
        <Image
          src={showcaseDark}
          alt="CoinJeeto and CashBoo — our live consumer AI apps"
          priority
          className="hidden h-auto w-full dark:block"
          sizes="(max-width: 768px) 100vw, 1120px"
        />
        <a
          href="#apps"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink px-7 py-4 font-display text-base font-bold text-paper shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-transform hover:scale-[1.04] sm:px-9 sm:py-5 sm:text-lg"
        >
          Our Apps
        </a>
      </div>
    </section>
  );
}
