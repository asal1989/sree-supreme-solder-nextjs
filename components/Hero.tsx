import Reveal from "./Reveal";
import { ButtonLink } from "./ui";
import ParallaxImage from "./ParallaxImage";
import { yearsInBusiness } from "@/lib/company";

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 41) % 100,
  size: 2 + (i % 3),
  dur: 11 + (i % 7) * 2,
  delay: (i * 3) % 14,
}));

export default function Hero() {
  const trust = [`${yearsInBusiness()}+ Years Experience`, "Quality Focused", "Pan-India Supply"];

  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <div className="hero-metal-lines pointer-events-none absolute inset-0" aria-hidden />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[640px] w-[640px] -translate-y-1/2 rounded-full bg-copper/20 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="hero-scan" />
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `-${p.delay}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:min-h-[min(80vh,720px)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-20">
        <div>
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3 text-amber">
              <span className="h-px w-8 bg-amber" aria-hidden />
              Solder Manufacturer · Madurai, India
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Precision Soldering.
              <br />
              <span className="accent-text">Trusted Since 1986.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream sm:text-lg">
              We manufacture solder wires, solder sticks, liquid flux, solder paint and lead-free
              materials for clean joints, stable output and dependable production lines.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/products">Explore Products</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Get a Quote</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 bg-amber" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-3 border border-white/10" aria-hidden />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-amber" aria-hidden />
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-amber" aria-hidden />
            <ParallaxImage
              src="/assets/img/supreme-wire-blue-range.jpg"
              alt="Supreme solder wire spools manufactured by Sree Supreme Solder"
              width={1280}
              height={853}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <div className="absolute -bottom-5 left-4 border border-white/15 bg-dark/95 px-4 py-3 shadow-xl sm:-left-6">
              <p className="font-display text-xl font-bold leading-none">RoHS</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream">Lead-free options</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
