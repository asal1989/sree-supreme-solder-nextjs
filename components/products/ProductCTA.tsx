import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ProductCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative py-24 sm:py-28">
        <Image
          src="/assets/img/hero-soldering.webp"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/85" />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 lg:block"
          style={{
            background: "linear-gradient(100deg, transparent, rgba(198,90,22,0.35))",
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl">
              Let&rsquo;s Build a
              <br />
              Better Tomorrow
              <br />
              Together
            </h2>
            <span className="mt-4 block h-1 w-16 bg-copper" />
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
              Reliable Materials.
              <br />
              Stronger Partnerships.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Partner with Sree Supreme Solder for high-quality soldering solutions.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Products <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
