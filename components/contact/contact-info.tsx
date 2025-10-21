"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function ContactInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-8">Office Hours</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-serif font-bold text-primary mb-4">Weekdays</h3>
            <p className="text-muted mb-2">Monday - Friday</p>
            <p className="text-text font-semibold">9:00 AM - 6:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-primary mb-4">Weekends</h3>
            <p className="text-muted mb-2">Saturday - Sunday</p>
            <p className="text-text font-semibold">10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
