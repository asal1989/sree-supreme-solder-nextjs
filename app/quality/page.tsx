import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quality | Sree Supreme Solder",
  description:
    "Every batch is made to deliver consistent performance, dependable joints, and confidence on the production floor.",
};

export const POINTS = [
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
    desc: "A complete range of solder wires, sticks, flux and paint for diverse requirements.",
  },
  {
    img: "/assets/img/quality/customer-focus.webp",
    tag: "PARTNERING FOR A BRIGHTER TOMORROW",
    title: "Customer Focus",
    desc: "Long-term partnerships built on technical support, responsiveness and dependable supply.",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Built on Quality. Driven by Trust."
        lead="Every batch is made to deliver consistent performance, dependable joints, and confidence on the production floor."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-xl border border-line bg-panel shadow-sm">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={q.img}
                    alt={q.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute right-3 top-3 max-w-[45%] text-right text-[10px] font-semibold uppercase leading-tight tracking-wider text-white/85">
                    {q.tag}
                  </span>
                  <span className="absolute bottom-3 left-4 h-px w-8 bg-copper" />
                </div>
                <div className="relative p-5 pb-14">
                  <h3 className="font-display text-base font-semibold text-ink">{q.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{q.desc}</p>
                  <span className="absolute bottom-5 left-5 text-xs font-bold text-muted/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-4 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
