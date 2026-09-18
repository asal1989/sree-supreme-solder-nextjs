"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const word = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AnimatedHeading({
  text,
  as: Tag = "h1",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      <Tag className={className}>
        {words.map((w, i) => (
          <motion.span key={`${w}-${i}`} variants={word} className="inline-block">
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
