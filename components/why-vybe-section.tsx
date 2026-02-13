"use client"

import { useEffect, useRef } from "react"

// Custom Icon Components
function NaturalIcon({ className }: { className?: string }) {
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

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L36 24L48 28L36 32L32 48L28 32L16 28L28 24L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 12L50 18L56 20L50 22L48 28L46 22L40 20L46 18L48 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 44L18 50L24 52L18 54L16 60L14 54L8 52L14 50L16 44Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FeatherIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 52L52 12C52 12 56 16 52 28C48 40 40 44 32 48C24 52 12 52 12 52Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 44L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 44L40 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 44L48 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8V24L12 48C10 52 12 56 16 56H48C52 56 54 52 52 48L40 24V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 8H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="28" cy="40" r="2" fill="currentColor" />
      <circle cx="38" cy="44" r="2" fill="currentColor" />
    </svg>
  )
}

const features = [
  {
    Icon: NaturalIcon,
    title: "Sadelik",
    description: "Agresif vaatlerden uzak, dengeli ve sürdürülebilir bir yaklaşım. Cilt bakımını en saf haline indirgedik.",
  },
  {
    Icon: SparkleIcon,
    title: "Keyif",
    description: "Günlük bakımınız artık bir zorunluluk değil, kendinize ayırdığınız özel bir an. Her adım bir keyif.",
  },
  {
    Icon: FeatherIcon,
    title: "Işıltı",
    description: "Cildin doğal dengesini koruyarak, içten gelen ışıltıyı görünür kılarız. Yapay değil, doğal güzellik.",
  },
  {
    Icon: FlaskIcon,
    title: "Vegan",
    description: "Hayvansal içerik içermeyen formüllerimiz, doğaya ve cilde saygılı bir yaklaşımla geliştirildi.",
  },
]

export function WhyVybeSection() {
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
    <section ref={sectionRef} id="why-vybe" className="py-24 lg:py-32 bg-[#FFEDDB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24 lg:mb-32">
          <h2 className="reveal opacity-0 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#5C4033] text-balance mb-6">
            VYBE = Kendini Hisset
          </h2>
          <p className="reveal opacity-0 animation-delay-200 text-lg text-[#8B7355] max-w-2xl mx-auto leading-relaxed">
            Modern yaşamın hızında kaybolan "durma, fark etme ve kendine dönme" anlarını yeniden keşfet. VYBE felsefesi üç temel kavram üzerine inşa edilmiştir.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mt-12 lg:mt-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`reveal opacity-0 ${
                index === 1
                  ? "animation-delay-200"
                  : index === 2
                    ? "animation-delay-400"
                    : index === 3
                      ? "animation-delay-600"
                      : ""
              }`}
            >
              <div className="flex flex-col items-center text-center group">
                {/* Icon */}
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <feature.Icon className="w-full h-full text-[#BF9270]" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-[#5C4033] mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-[#8B7355]/80 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
