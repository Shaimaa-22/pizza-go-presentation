"use client"

import {
  motion,
  AnimatePresence,
  type TargetAndTransition,
  type Transition,
} from "framer-motion"
import { ReactNode } from "react"

type TransitionType =
  | "slide"
  | "fade"
  | "zoom"
  | "flip"
  | "rotate"
  | "cube"
  | "portal"
  | "glitch"
  | "wave"
  | "morph"

interface SlideTransitionProps {
  children: ReactNode
  slideIndex: number
  direction: number
  transitionType?: TransitionType
}

const transitions: Record<
  TransitionType,
  {
    initial: TargetAndTransition
    animate: TargetAndTransition
    exit: TargetAndTransition
    transition: Transition
  }
> = {
  slide: {
    initial: { opacity: 0, x: 1000, scale: 0.8, rotateY: -15 },
    animate: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
    exit: { opacity: 0, x: -1000, scale: 0.8, rotateY: 15 },
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
  },
  fade: {
    initial: { opacity: 0, scale: 0.9, filter: "blur(20px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.1, filter: "blur(20px)" },
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
  zoom: {
    initial: { opacity: 0, scale: 0, rotateZ: -10 },
    animate: { opacity: 1, scale: 1, rotateZ: 0 },
    exit: { opacity: 0, scale: 2, rotateZ: 10 },
    transition: { type: "spring", stiffness: 150, damping: 25 },
  },
  flip: {
    initial: { opacity: 0, rotateX: 90, scale: 0.8, y: 100 },
    animate: { opacity: 1, rotateX: 0, scale: 1, y: 0 },
    exit: { opacity: 0, rotateX: -90, scale: 0.8, y: -100 },
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  rotate: {
    initial: { opacity: 0, rotate: -180, scale: 0.5, x: -200 },
    animate: { opacity: 1, rotate: 0, scale: 1, x: 0 },
    exit: { opacity: 0, rotate: 180, scale: 0.5, x: 200 },
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
  cube: {
    initial: { opacity: 0, rotateY: 90, x: 500, z: -500 },
    animate: { opacity: 1, rotateY: 0, x: 0, z: 0 },
    exit: { opacity: 0, rotateY: -90, x: -500, z: -500 },
    transition: { type: "spring", stiffness: 100, damping: 25 },
  },
  portal: {
    initial: { opacity: 0, scale: 0, borderRadius: "50%" },
    animate: { opacity: 1, scale: 1, borderRadius: "0%" },
    exit: { opacity: 0, scale: 0, borderRadius: "50%" },
    transition: { duration: 0.6, ease: [0.6, 0, 0.2, 1] },
  },
  glitch: {
    initial: {
      opacity: 0,
      x: -50,
      filter: "hue-rotate(90deg) saturate(3)",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    animate: {
      opacity: 1,
      x: 0,
      filter: "hue-rotate(0deg) saturate(1)",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    exit: {
      opacity: 0,
      x: 50,
      filter: "hue-rotate(-90deg) saturate(3)",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  wave: {
    initial: { opacity: 0, y: 200, skewY: 10, scale: 0.9 },
    animate: { opacity: 1, y: 0, skewY: 0, scale: 1 },
    exit: { opacity: 0, y: -200, skewY: -10, scale: 0.9 },
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
  morph: {
    initial: {
      opacity: 0,
      scale: 0.5,
      borderRadius: "100%",
      rotate: 45,
    },
    animate: {
      opacity: 1,
      scale: 1,
      borderRadius: "0%",
      rotate: 0,
    },
    exit: {
      opacity: 0,
      scale: 1.5,
      borderRadius: "100%",
      rotate: -45,
    },
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

const slideTransitions: TransitionType[] = [
  "portal",
  "cube",
  "flip",
  "wave",
  "rotate",
  "glitch",
  "zoom",
  "morph",
  "slide",
  "fade",
]

export function SlideTransition({
  children,
  slideIndex,
  direction,
  transitionType,
}: SlideTransitionProps) {
  const type = transitionType || slideTransitions[slideIndex % slideTransitions.length]
  const config = transitions[type]

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={slideIndex}
        initial={direction > 0 ? config.initial : config.exit}
        animate={config.animate}
        exit={direction > 0 ? config.exit : config.initial}
        transition={config.transition}
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: 1500, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(" ")

  return (
    <motion.span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: delay + i * 0.05,
          }}
          className="inline-block mr-2"
          style={{ transformOrigin: "bottom" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function GlowingBorder({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-sm"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      <div className="relative bg-card rounded-xl">{children}</div>
    </motion.div>
  )
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {prefix}
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {value.toLocaleString()}
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {suffix}
      </motion.span>
    </motion.span>
  )
}

export function FloatingCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
    >
      {children}
    </motion.div>
  )
}