import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Products | Sree Supreme Solder",
  description:
    "Reliable soldering solutions engineered for electronics, electrical, industrial, and manufacturing applications.",
};

const PRODUCTS = [
  {
    title: "Solder Wires",
    desc: "High performance solder wires for superior wetting and stronger joints.",
    img: "/assets/img/supreme-wire-blue-range.jpg",
  },
  {
    title: "Solder Sticks",
    desc: "Consistent quality solder sticks for industrial and electronic applications.",
    img: "/assets/img/supreme-solder-sticks-close.jpg",
  },
  {
    title: "Liquid Flux",
    desc: "Excellent flux activity for better wetting and reliable connections.",
    img: "/assets/img/supreme-flux-range.jpg",
  },
  {
    title: "Solder Paint",
    desc: "Reliable solder paint solutions for electronics manufacturing and PCB assembly.",
    img: "/assets/img/product-paint.webp",
  },
  {
    title: "Lead-Free Solutions",
    desc: "RoHS compliant, environmentally friendly, lead-free soldering materials.",
    img: "/assets/img/product-leadfree.webp",
  },
];

const GALLERY = [
  {
    title: "Rosin Soldering Flux",
    img: "/assets/img/supreme-flux-close.jpg",
  },
  {
    title: "Orange Solder Wire Range",
    img: "/assets/img/supreme-wire-orange-range.jpg",
  },
  {
    title: "Blue Solder Wire Range",
    img: "/assets/img/supreme-wire-blue-range.jpg",
  },
  {
    title: "Purple Solder Wire Range",
    img: "/assets/img/supreme-wire-purple-range.jpg",
  },
  {
    title: "Supreme Solder Sticks",
    img: "/assets/img/supreme-solder-sticks-wide.jpg",
  },
  {
    title: "Liquid Flux Pack Sizes",
    img: "/assets/img/supreme-flux-range.jpg",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Product Range"
        title="Materials for Stronger Connections"
        lead="Reliable soldering solutions engineered for electronics, electrical, industrial, and manufacturing applications."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="group h-full overflow-hidden rounded-2xl border border-line bg-panel shadow-lg shadow-black/5">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                  <a href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Request details <span aria-hidden>&rarr;</span>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-bg-alt">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">
              Product Gallery
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Supreme Products in Stock
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <figure className="overflow-hidden rounded-2xl border border-line bg-panel shadow-sm">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-sm font-semibold text-ink">
                    {item.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
