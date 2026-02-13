"use client"

import { useEffect, useRef } from "react"

export function LifestyleSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("active")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="lifestyle" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Beige Container */}
        <div className="reveal opacity-0 bg-[#EDE7E1] rounded-[2.5rem] p-6 md:p-10 lg:p-12 shadow-[0_8px_40px_-12px_rgba(191,146,112,0.15)]">
          {/* Image */}
          <div className="aspect-[4/5] sm:aspect-[3/2] lg:aspect-video rounded-[1.5rem] overflow-hidden mb-8 lg:mb-12">
            <img
              src="/images/model-image.png"
              alt="Self-care moment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content Below Image */}
          <div className="text-center px-4 md:px-8 lg:px-12">
            <h2 className="reveal opacity-0 font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#2B2B2B] mb-4 lg:mb-6 text-balance">
              Ritüel bir keyif olsun
            </h2>
            <p className="reveal opacity-0 text-[#2B2B2B] text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Dur, fark et, kendine dön. VYBE ile cilt bakımı bir zorunluluk değil, günün en keyifli anı haline gelir.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reveal {
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1 !important;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
