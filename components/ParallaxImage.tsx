"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage(props: ImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div ref={ref} className="relative aspect-[3/2] overflow-hidden border border-white/10 bg-dark-2">
      <motion.div style={reduce ? undefined : { y, scale: 1.14 }} className="absolute inset-0">
        <Image {...props} alt={props.alt} className="h-full w-full object-cover" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />
    </div>
  );
}
