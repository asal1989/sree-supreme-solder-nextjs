import { CircuitBoard, Battery, Zap, Car, Factory, MoreHorizontal } from "lucide-react";
import Reveal from "@/components/Reveal";

const INDUSTRIES = [
  { icon: CircuitBoard, label: "PCB Manufacturing" },
  { icon: Battery, label: "Capacitor Manufacturers" },
  { icon: Zap, label: "Electrical & Electronics" },
  { icon: Car, label: "Automotive Components" },
  { icon: Factory, label: "Industrial Applications" },
  { icon: MoreHorizontal, label: "And More" },
];

export default function IndustriesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
          Industries We Serve
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Powering Multiple Industries
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Our products are used across a wide range of industries, enabling reliable and
          efficient manufacturing.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
        {INDUSTRIES.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.07}>
            <div className="flex items-center gap-4 border-b border-line pb-5">
              <item.icon size={24} strokeWidth={1.5} className="shrink-0 text-copper" />
              <span className="font-display text-base font-semibold text-ink">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
