"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { apps } from "@/lib/data";
import SectionHead from "./SectionHead";
import coinjeetoLogo from "@/public/coinjeeto-logo.png";
import cashbooLogo from "@/public/cashboo-logo.png";
import moleculeArt from "@/public/molecule.webp";
import moleculeArtDark from "@/public/molecule-dark.webp";

const logos: Record<string, typeof coinjeetoLogo> = {
  CoinJeeto: coinjeetoLogo,
  CashBoo: cashbooLogo,
};

export default function Apps() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }),
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="apps"
      className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Decorative molecular structure — bleeds to the right viewport edge, behind the cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[38%] right-[min(0px,calc((72rem_-_100vw)/2_-_2rem))] -z-10 w-[46%] max-w-[480px] -translate-y-1/2 select-none"
      >
        <Image
          src={moleculeArt}
          alt=""
          priority={false}
          className="h-auto w-full opacity-90 mix-blend-multiply drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] [mask-image:linear-gradient(to_right,transparent,black_10%)] dark:hidden"
        />
        <Image
          src={moleculeArtDark}
          alt=""
          priority={false}
          className="hidden h-auto w-full opacity-90 mix-blend-screen [mask-image:linear-gradient(to_right,transparent,black_10%)] dark:block"
        />
      </div>

      <SectionHead
        eyebrow="Our products"
        title="We build apps, too."
        intro="Alongside the AI we build for clients, we ship our own apps. For now that's two reward apps — CoinJeeto and CashBoo — live and paying real users in India, with a few more in the build phase and launching soon. Everything we learn about reliability, cost and governance flows back into the systems we build for clients."
      />

      <div ref={ref} className="relative z-10 mt-12 grid gap-4 lg:w-[92%] lg:grid-cols-2">
        {apps.map((app, i) => (
          <article
            key={app.name}
            style={{ "--reveal-delay": shown ? `${i * 200}ms` : "0ms" } as CSSProperties}
            className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-card [transition:transform_1100ms_ease-out_var(--reveal-delay),opacity_1100ms_ease-out_var(--reveal-delay),box-shadow_300ms_ease] hover:shadow-[0_22px_45px_-18px_rgba(0,0,0,0.3),0_6px_16px_-10px_rgba(0,0,0,0.18)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_26px_55px_-18px_rgba(0,0,0,0.75)] ${
              shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className="flex h-36 items-center justify-center px-6"
              style={{ backgroundColor: app.logoBg }}
            >
              <Image
                src={logos[app.name]}
                alt={`${app.name} logo`}
                className="h-16 w-auto sm:h-20"
              />
            </div>

            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <h3 className="sr-only">{app.name}</h3>
              <p className="font-display text-base font-semibold text-muted">
                {app.tagline}
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-muted">{app.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {app.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-panel px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {app.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.primary
                        ? "rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
                        : "rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-panel"
                    }
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
