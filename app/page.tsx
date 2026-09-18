import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Testimonials from "@/components/Testimonials";
import Certifications from "@/components/Certifications";
import HeroHeading from "@/components/HeroHeading";
import { getProductBySlug } from "@/data/products";

const ICONS = {
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h1M16 5h3a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-1" />
      <path d="M12 13v3M9 20h6M10 20l.5-4h3l.5 4" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 20c8 0 14-6 14-14 0 0-11-2-14 6-2 5 0 8 0 8Z" />
      <path d="M5 20c0-4 2-8 6-11" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.26.6.85 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  trending: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </svg>
  ),
};

const STATS = [
  { icon: ICONS.trophy, value: "38+", label: "Years of Manufacturing", accent: "gold" },
  { icon: ICONS.leaf, value: "RoHS", label: "Lead-Free Options", accent: "green" },
  { icon: ICONS.layers, value: "4", label: "Core Product Lines", accent: "blue" },
] as const;

const FEATURES = [
  { icon: ICONS.shield, label: "Consistent Quality", desc: "Stringent quality control in every batch", tint: "blue" },
  { icon: ICONS.gear, label: "Reliable Solutions", desc: "Engineered for superior performance", tint: "purple" },
  { icon: ICONS.users, label: "Customer Focused", desc: "Your success is our priority", tint: "amber" },
  { icon: ICONS.trending, label: "Growing Together", desc: "Innovating for a stronger tomorrow", tint: "green" },
] as const;

const FEATURE_TINTS = {
  blue: "bg-sky-100 text-sky-600",
  purple: "bg-violet-100 text-violet-600",
  amber: "bg-amber-100 text-amber-600",
  green: "bg-emerald-100 text-emerald-600",
} as const;

const STAT_ACCENTS = {
  gold: { bar: "from-amber-300 via-amber-400 to-amber-300", icon: "bg-amber-400/15 text-amber-300 ring-amber-300/30" },
  green: { bar: "from-emerald-300 via-emerald-400 to-emerald-300", icon: "bg-emerald-400/15 text-emerald-300 ring-emerald-300/30" },
  blue: { bar: "from-sky-300 via-sky-400 to-sky-300", icon: "bg-sky-400/15 text-sky-300 ring-sky-300/30" },
} as const;

const HOME_PRODUCT_SLUGS = ["solder-wires", "solder-sticks", "liquid-flux", "solder-paint"] as const;

const PRODUCTS = HOME_PRODUCT_SLUGS.map((slug) => {
  const product = getProductBySlug(slug);
  if (!product) throw new Error(`Homepage product slug "${slug}" not found in data/products.ts`);
  return { slug: product.slug, title: product.name, desc: product.description, img: product.image };
});

const INDUSTRIES = [
  { img: "/assets/img/industries/electronics-manufacturing.webp", label: "Electronics Manufacturing" },
  { img: "/assets/img/industries/industrial-equipment.webp", label: "Industrial Equipment" },
  { img: "/assets/img/industries/automotive.webp", label: "Automotive" },
  { img: "/assets/img/industries/aerospace.webp", label: "Aerospace" },
  { img: "/assets/img/industries/consumer-appliances.webp", label: "Consumer Appliances" },
  { img: "/assets/img/industries/medical-devices.webp", label: "Medical Devices" },
  { img: "/assets/img/industries/renewable-energy.webp", label: "Renewable Energy" },
  { img: "/assets/img/industries/telecommunications.webp", label: "Telecommunications" },
];

const QUALITY_POINTS = [
  {
    img: "/assets/img/quality/consistent-quality.webp",
    tag: "TESTED · TRUSTED · CONSISTENT",
    title: "Consistent Quality",
    desc: "Reliable, tested soldering materials manufactured to the same high standard, batch after batch.",
  },
  {
    img: "/assets/img/quality/reliable-performance.webp",
    tag: "PERFORMANCE THAT DELIVERS",
    title: "Reliable Performance",
    desc: "Strong, durable joints and consistent output trusted by manufacturers for nearly four decades.",
  },
  {
    img: "/assets/img/quality/wide-applications.webp",
    tag: "SOLUTIONS FOR EVERY INDUSTRY",
    title: "Wide Applications",
    desc: "A complete range of solder wires, sticks, flux and paint serving diverse industrial requirements.",
  },
  {
    img: "/assets/img/quality/customer-focus.webp",
    tag: "PARTNERING FOR A BRIGHTER TOMORROW",
    title: "Customer Focus",
    desc: "Long-term partnerships built on technical support, responsiveness and dependable supply.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO - full-bleed PCB soldering image */}
      <section className="relative overflow-hidden bg-[#071426] text-white">
        <Image
          src="/assets/img/hero-soldering.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,20,38,0.98) 0%, rgba(7,20,38,0.92) 40%, rgba(7,20,38,0.4) 72%, rgba(7,20,38,0.55) 100%)",
          }}
        />

        {/* corner labels */}
        <span className="absolute right-5 top-6 hidden text-right text-[11px] font-semibold uppercase leading-[1.6] tracking-[0.25em] text-sky-200/70 sm:right-8 sm:block">
          Soldering<br />A Brighter<br />Future
        </span>
        <span className="absolute bottom-8 right-5 hidden max-w-[9rem] text-right text-[11px] font-semibold uppercase leading-[1.6] tracking-[0.2em] text-sky-200/70 lg:right-8 lg:block">
          Trusted<br />by Industry<br />Across India
          <span className="mt-2 block h-px w-10 bg-sky-300/40" />
        </span>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/80">
                <span className="h-px w-8 bg-sky-300/50" />
                Precision · Performance · A Cleaner Tomorrow
                <span className="h-px w-8 bg-sky-300/50" />
              </div>
            </Reveal>
            <HeroHeading className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl" />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                For over three decades, we have been manufacturing high-quality, lead-free
                soldering solutions for a more reliable and sustainable electronics industry.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((s, i) => {
              const accent = STAT_ACCENTS[s.accent];
              return (
                <Reveal key={s.label} delay={0.15 + i * 0.08}>
                  <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md transition-colors hover:bg-white/[0.08]">
                    <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${accent.bar} opacity-80`} />
                    <div className="flex items-center gap-3">
                      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ring-1 ${accent.icon}`}>
                        <span className="h-5 w-5">{s.icon}</span>
                      </span>
                      <div>
                        <p className="font-display text-2xl font-semibold leading-none text-white">{s.value}</p>
                        <p className="mt-1.5 text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-white/60">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="border-b border-line bg-bg-alt">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-line">
            {FEATURES.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.08} className="px-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <div className="flex items-start gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${FEATURE_TINTS[f.tint]}`}>
                    <span className="h-6 w-6">{f.icon}</span>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{f.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-line" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
              Quality Today &nbsp;|&nbsp; Sustainability Tomorrow
            </span>
            <span className="h-px w-16 bg-line" />
          </div>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">
            Our Product Range
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Quality Materials for a Stronger Connected World
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <TiltCard className="group h-full overflow-hidden rounded-2xl border border-line bg-panel shadow-lg shadow-black/5">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                  <Link href={`/products/${p.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-copper">
                    View Product <span aria-hidden>&rarr;</span>
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* LEAD FREE BANNER */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl border border-line-dark bg-gradient-to-r from-copper-2 via-copper to-amber p-8 text-white sm:flex-row sm:items-center">
            <div className="flex items-center gap-5">
              <Image
                src="/assets/img/product-leadfree.webp"
                alt="Lead-free certification badge"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover ring-2 ring-white/60"
              />
              <div>
                <h3 className="font-display text-xl font-semibold text-white">Lead-Free Solutions</h3>
                <p className="mt-1 text-sm text-cream">A greener tomorrow. Same reliability.</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/80">
                  RoHS Compliant &middot; Environment Friendly &middot; Lead Free
                </p>
              </div>
            </div>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition-transform"
            >
              View Products <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* INDUSTRIES */}
      <section className="border-y border-line bg-bg-alt">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">
              Industries We Serve
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Powering Industries Through Better Connections
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {INDUSTRIES.map((i, idx) => (
              <Reveal key={i.label} delay={idx * 0.05}>
                <TiltCard className="group h-full overflow-hidden rounded-xl border border-line bg-panel shadow-sm transition-colors hover:border-copper">
                  <div className="relative h-32 w-full overflow-hidden sm:h-36">
                    <Image
                      src={i.img}
                      alt={i.label}
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-sm font-semibold text-ink">{i.label}</span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <Image src="/assets/img/world-map.svg" alt="" fill className="object-cover object-center" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-md -rotate-2 overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:rotate-0">
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
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">
              Our Journey · Since 1986
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              From Madurai to Industries Worldwide
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Founded by <strong className="text-copper">Mr. P. Sekar</strong> in Madurai, Tamil Nadu,
              Sree Supreme Solder has been delivering high-quality soldering materials for nearly four
              decades. From Madurai to industries worldwide, we continue to connect a better tomorrow
              through consistent quality and reliable soldering solutions.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(184,98,31,0.35)] transition-transform hover:scale-105">
              Know Our Story <span aria-hidden>&rarr;</span>
            </Link>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
              <span>Trusted Roots</span>
              <span className="text-line">|</span>
              <span>Global Reach</span>
              <span className="text-line">|</span>
              <span>A Brighter Tomorrow</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUALITY */}
      <section className="border-t border-line bg-bg-alt">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">Quality</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Built on Quality. Driven by Trust.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUALITY_POINTS.map((q, i) => (
              <Reveal key={q.title} delay={i * 0.08}>
                <div className="group h-full overflow-hidden rounded-xl border border-line bg-panel shadow-sm">
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src={q.img}
                      alt={q.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <span className="absolute right-3 top-3 max-w-[45%] text-right text-[9px] font-semibold uppercase leading-tight tracking-wider text-white/85">
                      {q.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-semibold text-ink">{q.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{q.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Certifications />

      {/* CTA */}
      <section className="relative overflow-hidden bg-dark text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(232,121,42,0.25), transparent 60%)" }}
        />
        <Reveal>
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-20 sm:flex-row sm:items-center sm:px-8">
            <h2 className="max-w-lg font-display text-3xl font-semibold text-white sm:text-4xl">
              Let&rsquo;s Build a Stronger Tomorrow Together
            </h2>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-copper to-copper-2 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(184,98,31,0.4)] hover:scale-105 transition-transform"
            >
              Get in Touch <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
