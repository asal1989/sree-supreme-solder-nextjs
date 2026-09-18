import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Industries | Sree Supreme Solder",
  description: "Trusted soldering materials for the products and systems that keep the world moving.",
};

const INDUSTRIES = [
  { icon: "💻", title: "Electronics Manufacturing", desc: "Precision materials for PCB assembly and electronic production." },
  { icon: "🏭", title: "Industrial Equipment", desc: "Reliable joints and durable performance for industrial systems." },
  { icon: "🚗", title: "Automotive", desc: "Consistent soldering solutions for modern vehicle electronics." },
  { icon: "✈️", title: "Aerospace", desc: "Dependable materials where quality and reliability matter most." },
  { icon: "🔌", title: "Consumer Appliances", desc: "Repeatable results across high-volume appliance manufacturing." },
  { icon: "🏥", title: "Medical Devices", desc: "Carefully manufactured materials for critical device applications." },
  { icon: "⚡", title: "Renewable Energy", desc: "Connection solutions for power electronics and clean energy." },
  { icon: "📡", title: "Telecommunications", desc: "Stable, long-lasting connections for communication systems." },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Powering Industries Through Better Connections"
        lead="Trusted soldering materials for the products and systems that keep the world moving."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 0.06}>
              <TiltCard className="h-full rounded-xl border border-line bg-panel p-6 shadow-sm transition-colors hover:border-copper">
                <span className="text-3xl">{i.icon}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{i.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
