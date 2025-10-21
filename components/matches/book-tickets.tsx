"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Ticket } from "lucide-react"

export default function BookTickets() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center py-16 px-8">
          <div className="flex justify-center mb-6">
            <Ticket className="text-primary" size={48} />
          </div>
          <h2 className="text-primary mb-4">Book Your Tickets</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Don't miss the action! Book your tickets now for the upcoming matches and be part of the Ehsan Night Riders
            experience.
          </p>
          <button className="btn-primary">Book Now</button>
        </div>
      </motion.div>
    </section>
  )
}
