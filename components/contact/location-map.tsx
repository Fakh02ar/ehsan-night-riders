"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function LocationMap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-8">Find Us</h2>

        <div className="relative h-96 rounded-lg overflow-hidden">
          <img src="/placeholder.svg?height=400&width=1000" alt="Location Map" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
