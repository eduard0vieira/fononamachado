"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

export function AnimatedDivider({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div
        className={cn("h-px bg-forest/10", className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <motion.div
      className={cn("h-px origin-center bg-forest/10", className)}
      aria-hidden="true"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-5% 0px", amount: 0.5 }}
      transition={{ duration: 1.2, ease: EASE_OUT }}
    />
  );
}
