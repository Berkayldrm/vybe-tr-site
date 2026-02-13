"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

const TRENDYOL_URL = "https://www.trendyol.com/magaza/vybe-feel-yourself-m-1233726?sst=0&channelId=1"
  return (
    <header className="sticky top-4 left-0 right-0 z-50 p-4">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between h-14 lg:h-16 px-5 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center leading-tight">
  <span className="font-serif text-black text-xl font-normal tracking-wide">
    VYBE
  </span>
  <span className="text-[10px] tracking-[0.3em] text-black/60 uppercase text-center">
    — Feel Yourself —
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="#why-vybe" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Neden VYBE
            </Link>
            <Link href="#urunler" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ürünler
            </Link>
            <Link href="#lifestyle" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Ritüel
            </Link>
            <Link href="#ingredients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              İçerikler
            </Link>
            <Link href="#temoignages" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Yorumlar
            </Link>
            <Link href="#mission" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Hikayemiz
            </Link>
          </div>

          {/* CTA Button */}
           <div className="hidden md:block">
            <Button
  asChild
  className="rounded-full px-6 bg-black text-white transition-all duration-300 hover:bg-[#F27A1A] hover:text-black"
>
  <a href={TRENDYOL_URL} target="_blank" rel="noreferrer">
    Trendyol’da Satın Al
  </a>
</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 px-6 lg:px-8 border-t border-border/50">
            <div className="flex flex-col gap-4">
              <Link
                href="#why-vybe"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Neden VYBE
              </Link>
              <Link
                href="#urunler"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Ürünler
              </Link>
              <Link
                href="#lifestyle"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Ritüel
              </Link>
              <Link
                href="#ingredients"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                İçerikler
              </Link>
              <Link
                href="#temoignages"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Yorumlar
              </Link>
              <Link
                href="#mission"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hikayemiz
              </Link>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full mt-4">
                Keşfet
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
