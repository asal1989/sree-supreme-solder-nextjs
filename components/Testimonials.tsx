import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber">
          What Our Clients Say
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Trusted by Industries Across India
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={`${t.name}-${i}`} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 shadow-sm">
              <Quote className="text-copper/40" size={28} strokeWidth={1.5} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
