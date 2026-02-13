"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  delay?: number
}

export function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ")

  return (
    <span className="text-7xl">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ whiteSpace: "nowrap", display: "inline-block" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: delay + (wordIndex * word.length + charIndex) * 0.03,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  )
}
