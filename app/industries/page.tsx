import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export const metadata: Metadata = {
  title: "Industries | Sree Supreme Solder",
  description: "Trusted soldering materials for the products and systems that keep the world moving.",
};

export const INDUSTRIES = [
  { img: "/assets/img/industries/electronics-manufacturing.webp", title: "Electronics Manufacturing", desc: "Precision materials for PCB assembly and electronic production." },
  { img: "/assets/img/industries/industrial-equipment.webp", title: "Industrial Equipment", desc: "Reliable joints and durable performance for industrial systems." },
  { img: "/assets/img/industries/automotive.webp", title: "Automotive", desc: "Consistent soldering solutions for modern vehicle electronics." },
  { img: "/assets/img/industries/aerospace.webp", title: "Aerospace", desc: "Dependable materials where quality and reliability matter most." },
  { img: "/assets/img/industries/consumer-appliances.webp", title: "Consumer Appliances", desc: "Repeatable results across high-volume appliance manufacturing." },
  { img: "/assets/img/industries/medical-devices.webp", title: "Medical Devices", desc: "Carefully manufactured materials for critical device applications." },
  { img: "/assets/img/industries/renewable-energy.webp", title: "Renewable Energy", desc: "Connection solutions for power electronics and clean energy." },
  { img: "/assets/img/industries/telecommunications.webp", title: "Telecommunications", desc: "Stable, long-lasting connections for communication systems." },
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
              <TiltCard className="group h-full overflow-hidden rounded-xl border border-line bg-panel shadow-sm transition-colors hover:border-copper">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={i.img}
                    alt={i.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-ink">{i.title}</h3>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
