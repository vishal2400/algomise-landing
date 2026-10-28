import Image from "next/image";
import { process } from "@/lib/data";
import SectionHead from "./SectionHead";
import shapesArt from "@/public/shapes.png";

export default function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* Decorative balancing shapes — bleeds to the left viewport edge, behind the content */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[62%] left-[min(-2rem,calc((72rem_-_100vw)/2_-_5rem))] -z-10 w-[42%] max-w-[440px] -translate-y-1/2 select-none"
      >
        <Image
          src={shapesArt}
          alt=""
          priority={false}
          className="h-auto w-full opacity-90 mix-blend-multiply drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:opacity-80 dark:mix-blend-screen dark:invert dark:drop-shadow-none [mask-image:linear-gradient(to_left,transparent,black_12%)]"
        />
      </div>

      <div className="relative z-10">
        <SectionHead
          eyebrow="How we work"
          title="A four-step process built for AI’s failure modes."
          intro="Predictable cadence, production outcomes. One page that says what we’re building, why, and how we’ll measure it."
        />
      </div>

      <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 lg:w-[90%] lg:ml-auto lg:grid-cols-4">
        {process.map((p) => (
          <div key={p.title} className="rounded-2xl border border-line bg-card p-6">
            <h3 className="font-display text-lg font-bold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
