"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyVybeSection } from "@/components/why-vybe-section"
import { ProductSection } from "@/components/product-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { ScienceSection } from "@/components/science-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MissionSection } from "@/components/mission-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WhyVybeSection />
      <ProductSection />
      <LifestyleSection />
      <ScienceSection />
      <TestimonialsSection />
      <MissionSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
