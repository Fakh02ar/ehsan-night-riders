"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function JoinCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden bg-[#150a44]"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center py-16 px-8">
          <h2 className="text-white mb-4">Join the Riders Family</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Be part of an extraordinary cricket journey. Subscribe to our newsletter for exclusive updates, match
            tickets, and behind-the-scenes content.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
            <button className="btn-primary whitespace-nowrap hover:bg-[#150a44]">Subscribe</button>
          </div>

          <p className="text-muted text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </motion.div>
    </section>
  )
}
