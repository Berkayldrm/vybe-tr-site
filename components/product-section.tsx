"use client"

import { useEffect, useRef } from "react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { ChevronRight } from "lucide-react"

const products = [
  {
    name: "Hydrating Gel Cleanser",
    description: "Cildi kurutmadan ve bariyerini zedelemeden temizler. Arındırır, nem kaybını önler ve sonraki adımlar için cildi hazırlar.",
    image: "/images/hydrating-gel-cleanser.jpeg",
    tag: "01 · Arındırma",
  },
  {
    name: "Hydrating Tonic",
    description: "Pure Glow Ritual'in merkezinde yer alır. Cildi ferahlatır, nem seviyesini dengeler ve ışıltının ilk adımını başlatır.",
    image: "/images/hydrating-tonik.jpeg",
    tag: "02 · Denge",
  },
  {
    name: "Deep Moisture Serum",
    description: "Hyaluronik Asit ve Vitamin C ile nem tutma kapasitesini artırır. Cilde taze, canlı ve dengeli bir görünüm kazandırır.",
    image: "/images/deep-moisture-serum.jpeg",
    tag: "03 · Destek",
  },
  {
    name: "Moisture Bomb Cream",
    description: "Nemi cilde hapseder ve gün boyu konfor sağlar. Cildi yumuşatır ve pürüzsüz, sağlıklı bir görünüm sunar.",
    image: "/images/moisture-bom-cream.jpeg",
    tag: "04 · Kilitleme",
  },
]

export function ProductSection() {
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
    <section ref={sectionRef} id="urunler" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
            Pure Glow Ritual
          </p>
          <ScrollBlurText
            text="Birlikte çalışan bir bakım sistemi"
            className="font-serif text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
          />
          <p className="reveal opacity-0 animation-delay-400 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tekil ürünler değil; cildin doğal dengesini bozmadan arındıran, nemlendiren, destekleyen ve ışıltıyı görünür kılan bir bakım döngüsü.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible pl-6 pr-6 lg:pl-0 lg:pr-0">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`reveal opacity-0 ${index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : index === 3 ? "animation-delay-600" : ""} group min-w-[85vw] md:min-w-[70vw] lg:min-w-0 snap-start`}
              >
              <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted z-10 flex-shrink-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Content */}
                <div className="p-6 lg:p-6 flex flex-col flex-grow">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-3 font-medium">{product.tag}</p>
                  <h3 className="font-serif text-foreground mb-3 text-2xl font-normal">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll Indicator - Mobile Only */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex items-center gap-2 text-muted-foreground text-sm animate-pulse">
            <span>Kaydır</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
