import Reveal from "./Reveal";
import { ButtonLink } from "./ui";

export default function CTASection({
  title = "Looking for Reliable Soldering Solutions?",
  text = "Talk to our team about your product and application requirements.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_80%_50%,black,transparent_70%)]" aria-hidden />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-copper/30 blur-[110px]" aria-hidden />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-center lg:py-24">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-base text-cream sm:text-lg">{text}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <ButtonLink href="/contact">Request a Quote</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact Us</ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
