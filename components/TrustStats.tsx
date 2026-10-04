"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden>{n}{suffix}</span>
    </span>
  );
}

export type Stat = { value?: number; suffix?: string; text?: string; label: string };

export default function TrustStats({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="Company at a glance" className="relative border-b border-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-line px-5 sm:px-8 lg:grid-cols-4 lg:divide-x">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 py-8 text-center sm:py-10 lg:px-8 ${i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""} ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
          >
            <p className="font-display text-4xl font-extrabold text-ink sm:text-5xl">
              {s.text ?? <Counter value={s.value!} suffix={s.suffix} />}
            </p>
            <p className="eyebrow mt-3 text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
