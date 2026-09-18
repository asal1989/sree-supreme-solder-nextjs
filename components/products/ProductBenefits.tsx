import { ShieldCheck, Layers, Leaf, Globe2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Consistent performance in every batch",
  },
  {
    icon: Layers,
    title: "Wide Applications",
    desc: "Suitable for diverse industrial needs",
  },
  {
    icon: Leaf,
    title: "RoHS Compliant",
    desc: "Environmentally responsible solutions",
  },
  {
    icon: Globe2,
    title: "Trusted Worldwide",
    desc: "Supplying to industries globally",
  },
];

export default function ProductBenefits() {
  return (
    <section className="border-y border-line bg-bg-alt">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-16 sm:px-8 lg:grid-cols-4">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-copper/10 text-copper">
                <b.icon size={22} strokeWidth={1.5} />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-copper">
                {b.title}
              </span>
              <span className="text-sm leading-snug text-muted">{b.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
