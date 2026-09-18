import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Settings2,
  Gem,
  Handshake,
  TrendingUp,
  Quote,
  ArrowRight,
  CalendarDays,
  Layers,
  Globe2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "About Us | Sree Supreme Solder",
  description:
    "Sree Supreme Solder is a Madurai-based manufacturer of high-quality soldering materials, established in 1986 by founder Mr. P. Sekar.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Sree Supreme Solder",
    description:
      "Sree Supreme Solder is a Madurai-based manufacturer of high-quality soldering materials, established in 1986 by founder Mr. P. Sekar.",
    url: "/about",
  },
};

const STATS = [
  { icon: CalendarDays, value: "1986", label: "Year Established" },
  { icon: Layers, value: "4+", label: "Decades of Experience" },
  { icon: CheckCircle2, value: "Trusted", label: "By Industries" },
  { icon: Globe2, value: "Growing", label: "Global Opportunities" },
];

const VALUES = [
  {
    icon: Gem,
    tag: "QUALITY",
    title: "Consistent & Reliable",
  },
  {
    icon: Handshake,
    tag: "INTEGRITY",
    title: "In Everything We Do",
  },
  {
    icon: Users,
    tag: "CUSTOMER FOCUS",
    title: "Building Lasting Relationships",
  },
  {
    icon: TrendingUp,
    tag: "CONTINUOUS IMPROVEMENT",
    title: "Growing for a Better Tomorrow",
  },
];

const PRODUCTS = [
  { title: "No-Clean Solder Wire", desc: "Minimal residue, cleaner joints.", img: "/assets/img/product-wire.webp" },
  { title: "Urea Flux-Cored Solder Wire", desc: "Better wetting, stronger joints.", img: "/assets/img/supreme-wire-orange-range.jpg" },
  { title: "Lead-Free Solder Wire", desc: "RoHS-compliant, same reliability.", img: "/assets/img/product-leadfree.webp" },
  { title: "Solder Sticks", desc: "Consistent quality for industrial use.", img: "/assets/img/product-sticks.webp" },
  { title: "Lead-Free Solder Sticks", desc: "A greener tomorrow, no compromise.", img: "/assets/img/supreme-solder-sticks-close.jpg" },
  { title: "Liquid Flux", desc: "Excellent flux activity, reliable flow.", img: "/assets/img/product-flux.webp" },
  { title: "Solder Paint", desc: "Smooth application, dependable results.", img: "/assets/img/product-paint.webp" },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO / ABOUT INTRODUCTION ============ */}
      <section className="relative overflow-hidden bg-bg-alt">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-[0.07] lg:block"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            color: "var(--color-copper)",
            maskImage: "linear-gradient(to left, black, transparent)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-copper">About Us</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Connecting a
              <br />
              Better Tomorrow
              <br />
              Since 1986
            </h1>
            <span className="mt-5 block h-px w-16 bg-copper" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              From Madurai to industries worldwide, Sree Supreme Solder has grown through
              consistency, trust, and a commitment to better connections.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
              {[
                { icon: CheckCircle2, label: "Trusted Quality" },
                { icon: Users, label: "Customer Focus" },
                { icon: Settings2, label: "Reliable Performance" },
              ].map((item, i) => (
                <Reveal key={item.label} delay={0.15 + i * 0.1}>
                  <div className="flex items-center gap-2.5">
                    <item.icon size={18} className="text-copper" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-ink">{item.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative mx-auto max-w-md">
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/20">
                <Image
                  src="/assets/img/madurai-journey-card.webp"
                  alt="Meenakshi Amman Temple at sunset, Madurai — a legacy that connects the world"
                  width={938}
                  height={638}
                  priority
                  className="h-auto w-full"
                />
              </div>

              {/* Floating product image */}
              <div className="absolute -bottom-10 -left-8 w-40 rotate-[-6deg] overflow-hidden rounded-xl border-4 border-white bg-white shadow-2xl sm:w-48">
                <div className="relative h-32 w-full sm:h-36">
                  <Image
                    src="/assets/img/supreme-wire-blue-range.jpg"
                    alt="Sree Supreme solder wire spool"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ OUR STORY ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="relative -rotate-2 rounded-2xl border-8 border-white bg-white shadow-2xl transition-transform duration-500 hover:rotate-0">
                <div className="relative h-72 w-full overflow-hidden rounded-lg sm:h-80">
                  <Image
                    src="/assets/img/journey-growth.webp"
                    alt="Solder wire manufacturing at Sree Supreme Solder"
                    fill
                    className="object-cover grayscale"
                  />
                  <span className="font-script absolute left-4 top-4 text-lg text-white/90">Our Journey</span>
                </div>
              </div>
              <div className="mt-8 flex items-start gap-3 pl-1">
                <Quote size={40} strokeWidth={1.25} className="shrink-0 text-copper/40" />
                <p className="pt-2 font-display text-lg italic leading-snug text-ink">
                  More than products,
                  <br />
                  we create lasting connections.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">Our Story</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Built on Four Decades of Experience
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              <strong className="text-copper">Sree Supreme Solder</strong> is a Madurai-based manufacturer
              specializing in high-quality soldering materials for the electronics and industrial sectors.
              Established in <strong className="text-copper">1986</strong> under the leadership of founder{" "}
              <strong className="text-copper">Mr. P. Sekar</strong>, the company has built its business
              around consistent product quality, reliable performance and customer-focused service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              With a strong focus on soldering solutions, Sree Supreme Solder manufactures a range of
              products including No-Clean Solder Wires, Urea Flux-Cored Solder Wires, Lead-Free Solder
              Wires, Solder Sticks, Lead-Free Solder Sticks, Liquid Flux and C &amp; D Grade Solder Paint.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Our products are designed to support the demanding requirements of PCB soldering companies,
              capacitor manufacturers and other industrial and electronic manufacturing applications.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Over the years, our commitment has remained focused on delivering dependable soldering
              materials with consistent performance and practical solutions for our customers. We continue
              to strengthen our manufacturing capabilities and product range while maintaining the values
              of quality, reliability, precision and customer satisfaction.
            </p>
            <p className="mt-5 font-display text-lg font-semibold text-ink">
              Sree Supreme Solder — Reliable Soldering Solutions Since 1986.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-line pt-6 sm:grid-cols-4">
              {["1986", "Mr. P. Sekar", "No-Clean Wires", "Lead-Free Solutions"].map((h) => (
                <div key={h} className="text-sm font-semibold text-ink">
                  {h}
                </div>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(184,98,31,0.3)] transition-transform hover:scale-105"
            >
              Explore Products <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ COMPANY HIGHLIGHTS ============ */}
      <section className="border-y border-line bg-bg-alt">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-16 sm:px-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-copper/30 text-copper">
                  <s.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="font-display text-2xl font-semibold text-ink">{s.value}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PRECISION MANUFACTURING (VISION / MISSION) ============ */}
      <section className="relative overflow-hidden bg-dark py-28">
        <Image
          src="/assets/img/hero-soldering.webp"
          alt=""
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-xl font-display text-3xl font-semibold uppercase leading-tight text-white sm:text-5xl">
              Precision
              <br />
              in Every
              <br />
              Connection
            </h2>
            <span className="mt-4 block h-1 w-16 bg-copper" />
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <TiltCard className="h-full rounded-2xl bg-cream/95 p-8 shadow-2xl transition-transform hover:-translate-y-1">
                <Gem size={26} strokeWidth={1.5} className="text-copper" />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  To be a trusted global partner in soldering solutions, enabling innovation and progress
                  across industries.
                </p>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.2}>
              <TiltCard className="h-full rounded-2xl bg-cream/95 p-8 shadow-2xl transition-transform hover:-translate-y-1">
                <TrendingUp size={26} strokeWidth={1.5} className="text-copper" />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  To deliver high-quality soldering materials with consistent performance and practical
                  solutions that exceed customer expectations.
                </p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ OUR VALUES ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Our Values</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            The Principles That Guide Everything We Do
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.tag} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-line bg-panel p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                  <v.icon size={24} strokeWidth={1.5} />
                </div>
                <span className="mt-5 block text-[11px] font-semibold uppercase tracking-[0.15em] text-copper">
                  {v.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{v.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FOUNDER ============ */}
      <section className="border-y border-line bg-bg-alt">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">Our Founder</span>
          </Reveal>
          <div className="mt-12 grid items-center gap-12 md:grid-cols-[auto_1fr]">
            <Reveal delay={0.1}>
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-copper to-copper-2 font-display text-4xl font-semibold text-white shadow-xl sm:h-48 sm:w-48">
                PS
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <Quote size={44} strokeWidth={1.25} className="text-copper/40" />
              <p className="mt-2 max-w-2xl font-display text-2xl italic leading-snug text-ink sm:text-3xl">
                &ldquo;Quality and trust are the true foundations of long-term success.&rdquo;
              </p>
              <p className="font-script mt-5 text-3xl text-copper">P. Sekar</p>
              <p className="mt-1 text-sm font-semibold text-ink">Mr. P. Sekar</p>
              <p className="text-xs uppercase tracking-[0.15em] text-muted">Founder, Sree Supreme Solder</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT CONNECTION ============ */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">What We Make</span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            A Complete Range of Soldering Solutions
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-panel shadow-sm transition-shadow hover:shadow-lg">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted">{p.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-copper"
                  >
                    Explore Product <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ MADURAI / GLOBAL CLOSING BANNER ============ */}
      <section className="border-t border-line bg-dark">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/assets/img/madurai-journey-card.webp"
                alt="Meenakshi Amman Temple at sunset, Madurai — a legacy that connects the world"
                width={938}
                height={638}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-script text-4xl leading-tight text-white sm:text-5xl">
              From Madurai
              <br />
              To A Smarter World
            </p>
            <div className="mt-8 text-white">
              <span className="text-base font-bold uppercase tracking-[0.15em]">Sree Supreme Solder</span>
              <span className="mt-1 block text-[11px] uppercase tracking-[0.25em] text-white/70">
                Connecting a Better Tomorrow
              </span>
              <span className="my-5 block h-px w-16 bg-copper" />
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  Explore Our Products <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
