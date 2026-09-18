import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Quality | Sree Supreme Solder",
  description:
    "Every batch is made to deliver consistent performance, dependable joints, and confidence on the production floor.",
};

const POINTS = [
  {
    icon: "◈",
    title: "Consistent Quality",
    desc: "Reliable, tested soldering materials manufactured to the same high standard, batch after batch.",
  },
  {
    icon: "⚙",
    title: "Reliable Performance",
    desc: "Strong, durable joints and consistent output trusted by manufacturers for nearly four decades.",
  },
  {
    icon: "◎",
    title: "Wide Applications",
    desc: "A complete range of solder wires, sticks, flux and paint for diverse requirements.",
  },
  {
    icon: "✓",
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
              <div className="h-full rounded-xl border border-line bg-panel p-6 shadow-sm">
                <span className="text-2xl text-copper">{q.icon}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{q.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{q.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
