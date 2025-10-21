"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users } from "lucide-react"

export default function JoinTeam() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <Users className="text-primary" size={32} />
          <h2 className="text-primary">Join Our Team</h2>
        </div>

        <p className="text-muted mb-8">
          Are you a talented cricket player or professional looking to join Ehsan Night Riders? We're always looking for
          exceptional talent to strengthen our squad.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Position/Role"
              className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="text"
              placeholder="Experience (Years)"
              className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <textarea
            placeholder="Tell us about your cricket background and achievements"
            rows={4}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors resize-none"
          />
          <button type="submit" className="btn-primary">
            Submit Application
          </button>
        </form>
      </motion.div>
    </section>
  )
}
