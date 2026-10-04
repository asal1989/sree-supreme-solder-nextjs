import Reveal from "./Reveal";
import { SectionHeading } from "./ui";
import { WHY_US } from "@/data/home";

export default function WhyUs() {
  return (
    <section className="relative bg-bg-alt">
      <div className="tech-grid-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Sree Supreme Solder?"
          lead="Four decades of manufacturing experience, built on consistent quality and dependable supply."
        />
        <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <li key={w.title} className="bg-white">
              <Reveal delay={(i % 3) * 0.08} className="group h-full p-7 transition-colors duration-300 hover:bg-dark hover:text-white sm:p-9">
                <span className="font-display text-5xl font-extrabold text-line transition-colors duration-300 group-hover:text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-cream">{w.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
