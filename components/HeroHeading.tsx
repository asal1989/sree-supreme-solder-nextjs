"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const word = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

function Words({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i, arr) => (
        <motion.span key={`${w}-${i}`} variants={word} className={`inline-block ${className ?? ""}`}>
          {w}
          {i < arr.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </>
  );
}

export default function HeroHeading({ className }: { className?: string }) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      <Words text="Building Stronger" />
      <br />
      <Words text="Connections" className="text-sky-300" /> <Words text="for a Better Tomorrow" />
    </motion.h1>
  );
}
