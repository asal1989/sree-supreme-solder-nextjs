import Image from "next/image";
import Reveal from "@/components/Reveal";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <section className="border-t border-line bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            Certified Quality
          </span>
        </Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-2 grayscale transition-all hover:grayscale-0">
                <div className="relative h-16 w-16">
                  <Image src={c.image} alt={c.name} fill className="object-contain" />
                </div>
                <span className="text-xs font-medium text-muted">{c.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
