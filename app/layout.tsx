import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Vybe – Feel Yourself | Modern Skincare & Natural Beauty",
  description:
    "Vybe – Feel Yourself. Premium skincare powered by science and nature. Discover clean, effective beauty solutions designed to enhance your natural glow.",
  keywords: [
    "Vybe",
    "Skincare",
    "Natural Beauty",
    "Face Serum",
    "Hyaluronic Acid",
    "Premium Cosmetics",
  ],
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
  },
   openGraph: {
    title: "Vybe – Feel Yourself",
    description:
      "Premium skincare powered by science and nature.",
    url: "https://vybe-tr.com",
    siteName: "Vybe",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
