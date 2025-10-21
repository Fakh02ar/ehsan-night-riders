"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote } from "lucide-react"

export default function CaptainQuote() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <Quote className="text-primary mx-auto mb-6" size={48} />
        <p className="text-2xl md:text-3xl font-serif font-bold text-text mb-6">
          "Cricket is not just a game; it's a passion that unites us. Every match is an opportunity to prove our
          excellence and inspire our fans."
        </p>
        <p className="text-primary font-semibold">— Ahmed Khan, Team Captain</p>
      </motion.div>
    </section>
  )
}
