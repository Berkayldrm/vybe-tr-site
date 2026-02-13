"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState("")

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section ref={sectionRef} id="newsletter" className="py-24 lg:py-32 bg-[#E3B7A0] border-y border-[#BF9270]/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-[#5C4033]/70 font-medium mb-4">
            VYBE Topluluğuna Katıl
          </p>
          <h2 className="reveal opacity-0 animation-delay-200 font-serif text-3xl md:text-4xl lg:text-6xl font-light text-[#3D2E24] mb-6 text-balance">
            Pure Glow ritüeline başla
          </h2>
          <p className="reveal opacity-0 animation-delay-400 text-base md:text-lg text-[#5C4033]/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            Cilt bakımında yeni bir dönemin habercisi ol. Özel lansmanlardan, ritüel ipuçlarından ve kampanyalardan ilk siz haberdar olun.
          </p>
<div className="mt-10 flex justify-center">
  <a
    href="https://www.instagram.com/vybefeelyourself/"
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex items-center gap-3
      rounded-full px-8 py-4
      bg-[#1F1F1F] text-white
      border border-[#1F1F1F]
      transition-all duration-300
      hover:bg-white hover:text-[#1F1F1F]
      hover:-translate-y-[2px]
      shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]
    "
  >
    Instagram’da Takip Et
    <ArrowRight className="ml-2 w-4 h-4" />
  </a>
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
