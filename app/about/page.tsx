import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us | Sree Supreme Solder",
  description:
    "Learn about Sree Supreme Solder's journey from Madurai since 1986, manufacturing reliable soldering materials for industry.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Journey"
        title="Connecting a Better Tomorrow Since 1986"
        lead="From Madurai to industries worldwide, Sree Supreme Solder has grown through consistency, trust, and a commitment to better connections."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 md:grid-cols-2">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">Our Story</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Built on Four Decades of Experience
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Founded by <strong className="text-copper">Mr. P. Sekar</strong> in Madurai, Tamil Nadu,
            we manufacture solder wires, solder sticks, liquid flux, solder paint, and lead-free
            solutions for demanding industrial and electronic applications.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Our approach is simple: dependable materials, responsive support, and quality that stays
            consistent from batch to batch.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform"
          >
            Explore Products <span aria-hidden>&rarr;</span>
          </Link>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg shadow-black/10 sm:h-96">
            <Image src="/assets/img/about-madurai.webp" alt="Madurai Meenakshi Amman Temple skyline" fill className="object-cover" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
