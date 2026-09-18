import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const GALLERY = [
  { title: "Blue Solder Wire Range", img: "/assets/img/supreme-wire-blue-range.jpg", slug: "solder-wires" },
  { title: "Orange Solder Wire Range", img: "/assets/img/supreme-wire-orange-range.jpg", slug: "urea-flux-cored-solder-wires" },
  { title: "Purple Solder Wire Range", img: "/assets/img/supreme-wire-purple-range.jpg", slug: "lead-free-solder-wires" },
  { title: "Supreme Solder Sticks", img: "/assets/img/supreme-solder-sticks-wide.jpg", slug: "solder-sticks" },
  { title: "Lead-Free Solder Sticks", img: "/assets/img/supreme-solder-sticks-close.jpg", slug: "lead-free-solder-sticks" },
  { title: "Rosin Soldering Flux", img: "/assets/img/supreme-flux-range.jpg", slug: "liquid-flux" },
  { title: "Liquid Flux Close-Up", img: "/assets/img/supreme-flux-close.jpg", slug: "liquid-flux" },
  { title: "C & D Grade Solder Paint", img: "/assets/img/product-paint.webp", slug: "solder-paint" },
];

export default function ProductGallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
          Product Gallery
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Supreme Products in Stock
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.map((item, i) => (
          <Reveal key={item.title + i} delay={i * 0.05}>
            <Link
              href={`/products/${item.slug}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-white/85">
                  View Product
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
