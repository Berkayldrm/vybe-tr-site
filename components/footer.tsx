import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  produits: [
    { label: "Hydrating Gel Cleanser", href: "#produits" },
    { label: "Hydrating Tonic", href: "#produits" },
    { label: "Deep Moisture Serum", href: "#produits" },
    { label: "Moisture Bomb Cream", href: "#produits" },
  ],
  entreprise: [
    { label: "Hikayemiz", href: "#mission" },
    { label: "Ar-Ge Yaklaşımımız", href: "#ingredients" },
    { label: "Vegan Sertifika", href: "#" },
    { label: "İletişim", href: "#" },
  ],
  ressources: [
    { label: "Blog", href: "#" },
    { label: "SSS", href: "#" },
    { label: "Ritüel Rehberi", href: "#" },
    { label: "Basın Kiti", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#BF9270] text-[#FFEDDB] py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#FFEDDB] flex items-center justify-center">
                <span className="text-[#BF9270] font-serif text-sm font-medium">V</span>
              </div>
              <span className="font-serif text-xl font-medium text-[#FFEDDB]">VYBE</span>
            </Link>
            <p className="text-[#FFEDDB]/70 leading-relaxed mb-6 max-w-sm">
              Kendini hisset, ışılda. Sade, dengeli ve sürdürülebilir cilt bakımı ritüeli. Vegan ve etik formülasyonlar.
            </p>
            <div className="space-y-3 text-sm text-[#FFEDDB]/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hello@vybe.com.tr</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>+90 (212) 000 00 00</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-[#FFEDDB] mb-4">Ürünler</h4>
            <ul className="space-y-3">
              {footerLinks.produits.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#FFEDDB]/70 hover:text-[#FFEDDB] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#FFEDDB] mb-4">Kurumsal</h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#FFEDDB]/70 hover:text-[#FFEDDB] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#FFEDDB] mb-4">Kaynaklar</h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-[#FFEDDB]/70 hover:text-[#FFEDDB] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#FFEDDB]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#FFEDDB]/50">© 2025 VYBE. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-[#FFEDDB]/50">
            <Link href="#" className="hover:text-[#FFEDDB] transition-colors">
              Yasal Uyarı
            </Link>
            <Link href="#" className="hover:text-[#FFEDDB] transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="hover:text-[#FFEDDB] transition-colors">
              Satış Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
