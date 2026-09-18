"use client";

import { useRef, useState, type ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateZ(0)`,
    });
  }

  function handleLeave() {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }

  return (
    <div className="perspective-container">
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ transformStyle: "preserve-3d", transition: "transform 0.25s ease-out", ...style }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}
