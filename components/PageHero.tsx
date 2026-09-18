import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg-alt">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #e8792a, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">{lead}</p>
        </Reveal>
      </div>
    </section>
  );
}
