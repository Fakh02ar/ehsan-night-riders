"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Handshake } from "lucide-react"

export default function SponsorshipInquiry() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Handshake className="text-primary" size={32} />
          <h2 className="text-primary">Sponsorship Opportunities</h2>
        </div>

        <p className="text-muted mb-6">
          Interested in partnering with Ehsan Night Riders? We offer various sponsorship packages tailored to your
          brand's needs and objectives.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Company Name"
              className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Contact Email"
              className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <textarea
            placeholder="Tell us about your sponsorship interests"
            rows={4}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button type="submit" className="btn-primary">
            Submit Inquiry
          </button>
        </form>
      </motion.div>
    </section>
  )
}
