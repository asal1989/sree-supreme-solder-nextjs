import Image from "next/image";
import { ShieldCheck, Layers, Factory } from "lucide-react";
import Reveal from "@/components/Reveal";

const TRUST_POINTS = [
  { icon: ShieldCheck, tag: "QUALITY", label: "Consistent Quality" },
  { icon: Layers, tag: "PRODUCT RANGE", label: "Wide Product Range" },
  { icon: Factory, tag: "INDUSTRIES", label: "Trusted by Industries" },
];

export default function ProductHero() {
  return (
    <section className="relative overflow-hidden bg-bg-alt">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[45%_55%]">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-copper">
            Our Products
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Materials for
            <br />
            Stronger Connections
          </h1>
          <span className="mt-5 block h-px w-16 bg-copper" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Reliable soldering solutions engineered for electronics, electrical, industrial, and
            manufacturing applications.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {TRUST_POINTS.map((p, i) => (
              <Reveal key={p.label} delay={0.1 + i * 0.08}>
                <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-copper/35 text-copper">
                    <p.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-copper">
                      {p.tag}
                    </span>
                    <span className="block text-sm font-medium text-ink">{p.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mx-auto h-80 w-full max-w-xl overflow-hidden rounded-2xl shadow-xl shadow-black/10 sm:h-[26rem]">
            <Image
              src="/assets/img/hero-soldering.webp"
              alt="Precision soldering on a printed circuit board"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <p className="absolute left-6 top-6 max-w-[10rem] font-display text-lg font-semibold uppercase leading-tight text-white">
              Precision
              <br />
              in Every Joint
            </p>
            <p className="absolute bottom-6 right-6 max-w-[11rem] text-right text-[11px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-white/85">
              Soldering
              <br />
              Solutions
              <br />
              For a Brighter
              <br />
              Tomorrow
            </p>
          </div>

          {/* Floating product images */}
          <div className="absolute -bottom-8 left-2 hidden w-32 rotate-[-6deg] overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl sm:block lg:-left-6">
            <div className="relative h-24 w-full">
              <Image src="/assets/img/product-wire.webp" alt="Solder wire spool" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute -right-2 top-1/3 hidden w-28 rotate-[5deg] overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl md:block lg:-right-6">
            <div className="relative h-20 w-full">
              <Image src="/assets/img/product-flux.webp" alt="Liquid flux bottles" fill className="object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
