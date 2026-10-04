import Reveal from "./Reveal";
import { ButtonLink, SectionHeading } from "./ui";
import { QUALITY_POINTS } from "@/data/home";

export default function QualitySection({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_20%_20%,black,transparent_70%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          dark
          eyebrow="Quality"
          title={<>Quality Isn&rsquo;t Just a Claim.<br /><span className="accent-text">It&rsquo;s a Process.</span></>}
          lead="Every batch is made to deliver consistent performance, dependable joints and confidence on the production floor."
        />
        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
          {QUALITY_POINTS.map((q, i) => (
            <Reveal
              key={q.title}
              delay={i * 0.07}
              className={`bg-dark-2 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <div className="group h-full border-t-2 border-transparent p-7 transition-colors duration-300 hover:border-amber hover:bg-dark-panel sm:p-8">
                <span className="font-display text-sm font-bold text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{q.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream">{q.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        {showCta && (
          <Reveal className="mt-12">
            <ButtonLink href="/quality" variant="secondary">Our Quality Commitment</ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
