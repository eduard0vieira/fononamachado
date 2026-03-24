"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { DURATION, EASE_OUT } from "@/lib/motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.item,
      ease: EASE_OUT,
    },
  },
};

type ListTag = "ul" | "ol" | "div";

type StaggerListProps = {
  children: React.ReactNode;
  className?: string;
  as?: ListTag;
  role?: string;
};

export function StaggerList({
  children,
  className,
  as = "ul",
  role,
}: StaggerListProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  if (reduce) {
    return (
      <Tag className={className} role={role}>
        {children}
      </Tag>
    );
  }

  const MotionTag = as === "div" ? motion.div : as === "ol" ? motion.ol : motion.ul;

  return (
    <MotionTag
      className={className}
      role={role}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px", amount: 0.12 }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "li" | "div";
  role?: string;
};

export function StaggerItem({
  children,
  className,
  as = "li",
  role,
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const Tag = as;
  if (reduce) {
    return (
      <Tag className={className} role={role}>
        {children}
      </Tag>
    );
  }

  const MotionTag = as === "div" ? motion.div : motion.li;

  return (
    <MotionTag className={cn(className)} role={role} variants={item}>
      {children}
    </MotionTag>
  );
}
