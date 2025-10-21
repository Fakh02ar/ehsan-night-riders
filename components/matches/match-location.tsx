"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MapPin } from "lucide-react"

export default function MatchLocation() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12">Match Venues</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-base"
          >
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-serif font-bold text-primary mb-2">National Stadium</h3>
                <p className="text-muted text-sm">Karachi, Pakistan</p>
              </div>
            </div>
            <p className="text-muted mb-4">
              Our home ground, the National Stadium is one of the most iconic cricket venues in Pakistan with a capacity
              of 34,000.
            </p>
            <button className="btn-secondary w-full">Get Directions</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-base"
          >
            <div className="flex items-start gap-4 mb-4">
              <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-serif font-bold text-primary mb-2">Gaddafi Stadium</h3>
                <p className="text-muted text-sm">Lahore, Pakistan</p>
              </div>
            </div>
            <p className="text-muted mb-4">
              A historic venue with a capacity of 27,000, Gaddafi Stadium has hosted numerous international matches and
              tournaments.
            </p>
            <button className="btn-secondary w-full">Get Directions</button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
