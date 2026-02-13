"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "./scroll-blur-text"

const ingredients = [
  {
    number: "01",
    title: "Hyaluronik Asit",
    description:
      "Cildin derinliklerine nüfuz ederek yoğun nem sağlar. Kendi ağırlığının 1000 katı su tutabilir ve elastikiyeti artırır.",
  },
  {
    number: "02",
    title: "Vitamin C (Stabil Türev)",
    description: "Cilde taze ve canlı bir görünüm kazandırır. Cilt tonunun daha dengeli görünmesine yardımcı olur.",
  },
  {
    number: "03",
    title: "Cilt Bariyerini Destekleyen Bileşenler",
    description: "Dermatolojik dengeyi bozmayan, günlük kullanıma uygun, minimal ama etkili içerikler. Cildin ihtiyaç duyduğu temel fonksiyonlara odaklanır.",
  },
]

// Custom SVG Icons for ingredients
function DropletIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 8C32 8 16 28 16 40C16 48.837 23.163 56 32 56C40.837 56 48 48.837 48 40C48 28 32 8 32 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 42C24 42 26 38 32 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunburstIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" />
      <path d="M32 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 48V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 32H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 32H56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15.03 15.03L20.69 20.69" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M43.31 43.31L48.97 48.97" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M15.03 48.97L20.69 43.31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M43.31 20.69L48.97 15.03" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function LeafIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 52C12 52 12 32 32 20C52 8 56 8 56 8C56 8 56 28 36 40C16 52 12 52 12 52Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 44C28 36 36 32 44 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 56L20 44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ingredientIcons = [DropletIcon, SunburstIcon, LeafIcon]

export function ScienceSection() {
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
    <section ref={sectionRef} id="ingredients" className="py-24 lg:py-32 bg-gradient-to-b from-[#1F1F1F] to-[#2A2A2A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-white/60 font-medium mb-4">
            AR-GE YAKLAŞIMIMIZ
          </p>
          <ScrollBlurText
            text="Minimal ama etkili"
            className="font-serif text-3xl md:text-4xl text-white text-balance mb-6 lg:text-6xl font-light"
          />
          <p className="reveal opacity-0 animation-delay-400 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Agresif aktiflerden kaçınıyor, cilt bariyerini destekleyen içerikleri önceliklendiriyoruz. Günlük ve uzun vadeli kullanıma uygun, birlikte sinerji yaratan formülasyonlar.
          </p>
        </div>

        {/* Ingredient Icons */}
        <div className="reveal opacity-0 animation-delay-400 grid grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {ingredientIcons.map((Icon, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                <Icon className="w-full h-full text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Ingredients Details */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {ingredients.map((ingredient, index) => (
            <div
              key={ingredient.number}
              className={`reveal opacity-0 ${index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""}`}
            >
              <div className="border-t border-white/10 pt-8">
                <span className="text-sm font-medium text-white/40 mb-4 block">{ingredient.number}</span>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-4">
                  {ingredient.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{ingredient.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
