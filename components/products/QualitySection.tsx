import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const POINTS = ["Consistent Product Quality", "Reliable Performance", "Customer-Focused Solutions"];

export default function QualitySection() {
  return (
    <section className="border-y border-line bg-bg-alt">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg shadow-black/10 sm:h-96">
            <Image
              src="/assets/img/hero-soldering.webp"
              alt="Close-up of precision PCB soldering"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            Our Quality
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Precision in Every Connection
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Our focus is on delivering soldering materials with consistent performance, reliable
            handling and dependable results across demanding applications.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                <CheckCircle2 size={18} strokeWidth={1.75} className="shrink-0 text-copper" />
                {point}
              </li>
            ))}
          </ul>
          <Link
            href="/quality"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(184,98,31,0.3)] transition-transform hover:scale-105"
          >
            Explore Our Quality <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
