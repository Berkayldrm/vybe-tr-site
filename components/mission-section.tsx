"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} id="mission" className="py-16 lg:py-24 bg-[#FFEDDB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Beige Container */}
        <div className="reveal opacity-0 bg-[#EDCDBB] rounded-[2.5rem] p-6 md:p-10 lg:p-12 shadow-[0_8px_40px_-12px_rgba(191,146,112,0.15)]">
          {/* Responsive Image */}
          <div className="rounded-[1.5rem] overflow-hidden mb-8 lg:mb-12">
            {/* Mobile Image - Portrait */}
            <img
              src="/images/mission-mobile.jpeg"
              alt="VYBE product collection"
              className="w-full h-auto object-cover block lg:hidden"
            />
            {/* Desktop Image - Landscape */}
            <img
              src="/images/mission-desktop.jpeg"
              alt="VYBE product collection"
              className="w-full h-auto object-cover hidden lg:block"
            />
          </div>

          {/* Text Content Below Image */}
          <div className="text-center px-4 md:px-8 lg:px-12">
            <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-[#BF9270] font-medium mb-4">
              VYBE Nasıl Doğdu
            </p>
            <h2 className="reveal opacity-0 animation-delay-200 font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#5C4033] mb-6 lg:mb-8 text-balance">
              İki kadın girişimcinin vizyonu
            </h2>
            <div className="reveal opacity-0 animation-delay-400 space-y-6 text-[#8B7355] leading-relaxed max-w-3xl mx-auto">
              <p className="text-base md:text-lg">
                VYBE, iki kadın girişimcinin modern yaşamın hızında kaybolan "durma, fark etme ve kendine dönme" ihtiyacını fark etmesiyle doğdu.
              </p>
              <p className="text-base md:text-lg">
                Markanın çıkış noktası; cilt bakımını sonuç odaklı agresif vaatlerden uzaklaştırarak, sade, dengeli ve sürdürülebilir bir ritüele dönüştürme fikridir. VYBE = Kendini Hisset.
              </p>
            </div>
            <div className="reveal opacity-0 animation-delay-600 mt-10">
              <Button
                size="lg"
                className="bg-[#E3B7A0] text-[#3D2E24] hover:bg-[#BF9270] hover:text-white rounded-full px-8 py-6 text-base group transition-colors"
              >
                Hikayemizi keşfet
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
