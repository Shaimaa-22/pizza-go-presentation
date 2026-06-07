"use client"

import { useState, useEffect, useCallback } from "react"
import { Scene3D } from "@/components/scene-3d"
import { SlideTransition } from "@/components/slide-transitions"
import { Navigation, Ticker } from "@/components/navigation"
import {
  TitleSlide,
  ProblemSlide,
  FunctionalRequirementsSlide,
  NonFunctionalRequirementsSlide,
  SolutionSlide,
  TechnologiesSlide,
  ArchitectureSlide,
  WorkflowSlide,
  DatabaseSlide,
  HardwareSlide,
  WebPlatformSlide,
  TestingSlide,
  ResultsSlide,
  CompetitionSlide,
  ConclusionSlide,
  ThankYouSlide,
} from "@/components/slides"

const slides = [
  TitleSlide,
  ProblemSlide,
  FunctionalRequirementsSlide,
  NonFunctionalRequirementsSlide,
  SolutionSlide,
  TechnologiesSlide,
  ArchitectureSlide,
  WorkflowSlide,
  DatabaseSlide,
  HardwareSlide,
  WebPlatformSlide,
  TestingSlide,
  ResultsSlide,
  CompetitionSlide,
  ConclusionSlide,
  ThankYouSlide,
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goToSlide = useCallback((index: number, dir: number) => {
    if (index >= 0 && index < slides.length) {
      setDirection(dir)
      setCurrentSlide(index)
    }
  }, [])

const nextSlide = useCallback(() => {
  if (currentSlide < slides.length - 1) {
    goToSlide(currentSlide + 1, 1)
  }
}, [currentSlide, goToSlide])

const prevSlide = useCallback(() => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1, -1)
  }
}, [currentSlide, goToSlide])
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "Home") {
        e.preventDefault()
        goToSlide(0, -1)
      } else if (e.key === "End") {
        e.preventDefault()
        goToSlide(slides.length - 1, 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide])

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }

    setTouchStart(null)
  }

  // Mouse wheel navigation
  useEffect(() => {
    let lastWheelTime = 0
    const wheelThrottle = 500 // ms

    const handleWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - lastWheelTime < wheelThrottle) return

      if (e.deltaY > 30) {
        nextSlide()
        lastWheelTime = now
      } else if (e.deltaY < -30) {
        prevSlide()
        lastWheelTime = now
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: true })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [nextSlide, prevSlide])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div 
      className="w-screen h-screen overflow-hidden bg-background relative grid-pattern"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* 3D Background */}
      <Scene3D slideIndex={currentSlide} />

      {/* Slide content */}
      <div className="relative z-10 w-full h-full">
        <SlideTransition slideIndex={currentSlide} direction={direction}>
          <CurrentSlideComponent />
        </SlideTransition>
      </div>

      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={prevSlide}
        onNext={nextSlide}
      />

      {/* Ticker */}
      <Ticker />
    </div>
  )
}
