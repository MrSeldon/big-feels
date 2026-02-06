"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const directions = {
    up: { initial: { opacity: 0, y: 60 }, whileInView: { opacity: 1, y: 0 } },
    left: {
      initial: { opacity: 0, x: -100 },
      whileInView: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: 100 },
      whileInView: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      {...directions[direction]}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.19, 0, 0, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
