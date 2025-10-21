"use client"

import { motion } from "framer-motion"

export default function GalleryHero() {
  return (
    <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="gradient-text mb-4"
        >
          Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-muted"
        >
          Explore moments from matches, training, and fan celebrations
        </motion.p>
      </div>
    </section>
  )
}
