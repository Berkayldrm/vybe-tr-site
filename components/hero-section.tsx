"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatedText } from "@/components/animated-text"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollY = window.scrollY
      const sectionHeight = sectionRef.current.offsetHeight

      // Calculate progress (0 to 1) based on scroll within the hero section
      const progress = Math.min(scrollY / (sectionHeight * 0.5), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = 1 - scrollProgress * 0.05 // Reduces from 1 to 0.95
  const borderRadius = scrollProgress * 24 // Increases from 0 to 24px

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Full-width background image with zoom effect */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-100"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        {/* Mobile Image - Portrait */}
        <img
          src="/images/hero-mobile.jpeg"
          alt="VYBE products"
          className="w-full h-full object-cover animate-zoom-in block lg:hidden"
        />
        {/* Desktop Image - Landscape */}
        <img
          src="/images/hero-image.png"
          alt="VYBE in a natural environment"
          className="w-full h-full object-cover animate-zoom-in hidden lg:block"
        />
        {/* Balanced overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent" />
      </div>

      {/* Content overlay - text centered on desktop, left on mobile */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-2xl lg:max-w-4xl lg:mx-auto lg:text-center">
          {/* Text content */}
          <p className="reveal opacity-0 text-xs md:text-sm uppercase tracking-[0.2em] text-white font-medium mb-4 md:mb-6 drop-shadow-md">
            Pure Glow Ritual
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light leading-[1.2] mb-6 md:mb-8 drop-shadow-lg">
            <span className="block text-white">
              <AnimatedText text="Kendini hisset," delay={0.2} />
            </span>
            <span className="block text-[#E3B7A0]">
              <AnimatedText text="ışılda" delay={0.6} />
            </span>
          </h1>
          <p className="reveal opacity-0 animation-delay-400 text-sm md:text-base lg:text-lg text-white/95 leading-relaxed drop-shadow-md max-w-lg lg:mx-auto">
            Cildin doğal dengesini bozmadan arındıran, nemlendiren ve ışıltıyı görünür kılan sade bir bakım ritüeli.
          </p>
        </div>
      </div>
    </section>
  )
}
