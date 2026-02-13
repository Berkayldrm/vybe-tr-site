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
  title: "VYBE — Feel Yourself",
  description:
    "Discover a scientific and natural approach to skincare. VYBE combines rigorous science with nature's power.",
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${dmSans.variable} ${fraunces.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
