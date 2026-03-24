"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { DURATION, EASE_OUT } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Atraso extra (s) — útil em sequências */
  delay?: number;
  /** Deslocamento vertical inicial (px) */
  y?: number;
  /** Só anima uma vez ao entrar na viewport */
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-11% 0px -6% 0px", amount: 0.15 }}
      transition={{
        duration: DURATION.section,
        ease: EASE_OUT,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
