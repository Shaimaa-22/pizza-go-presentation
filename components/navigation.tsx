"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
}

export function Navigation({ currentSlide, totalSlides, onPrevious, onNext }: NavigationProps) {
  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-secondary/30 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-accent to-pizza-red"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Slide indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === currentSlide 
                ? "bg-primary w-2 h-6" 
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            whileHover={{ scale: 1.5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <motion.button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-card/80 backdrop-blur border border-border/50 text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-card hover:border-primary/50 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <div className="px-4 py-2 rounded-full bg-card/80 backdrop-blur border border-border/50">
          <span className="text-sm font-medium text-foreground">
            {currentSlide + 1} <span className="text-muted-foreground">/ {totalSlides}</span>
          </span>
        </div>

        <motion.button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-3 rounded-full bg-card/80 backdrop-blur border border-border/50 text-foreground disabled:opacity-30 disabled:cursor-not-allowed hover:bg-card hover:border-primary/50 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Keyboard hints */}
      <motion.div
        className="fixed bottom-6 right-6 flex items-center gap-2 text-xs text-muted-foreground/50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <kbd className="px-2 py-1 rounded bg-secondary/50">←</kbd>
        <kbd className="px-2 py-1 rounded bg-secondary/50">→</kbd>
        <span>or swipe</span>
      </motion.div>

      {/* Slide number large display */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        key={currentSlide}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <span className="text-6xl font-bold text-foreground/5">
          {String(currentSlide + 1).padStart(2, "0")}
        </span>
      </motion.div>
    </>
  )
}

// Scrolling ticker at the bottom
export function Ticker() {
  const items = [
    "PIZZA GO",
    "SMART ORDERING",
    "AUTOMATED PREPARATION",
    "ESP32 POWERED",
    "REAL-TIME TRACKING",
    "MQTT PROTOCOL",
    "FULL INTEGRATION"
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 h-8 bg-primary/10 backdrop-blur overflow-hidden z-40">
      <motion.div
        className="flex items-center h-full whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-primary/60">
            {item}
            <span className="mx-4 text-primary/30">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
