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

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="reveal opacity-0 animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto items-stretch">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                required
                className="flex-1 px-6 py-3.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#BF9270]/20 text-[#5C4033] placeholder:text-[#8B7355]/60 focus:outline-none focus:ring-2 focus:ring-[#BF9270]/40 transition-all h-12"
              />
              <Button
                type="submit"
                className="bg-[#5C4033] text-[#FFEDDB] hover:bg-[#3D2E24] rounded-full px-8 group transition-colors whitespace-nowrap h-12 font-medium"
              >
                Abone Ol
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-[#5C4033]/60 mt-4">
              Gizliliğinize saygı duyuyoruz. İstediğiniz zaman abonelikten çıkabilirsiniz.
            </p>
          </form>
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
