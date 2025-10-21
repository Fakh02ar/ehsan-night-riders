"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutTeam() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#bb2364] mb-4">About Ehsan Night Riders</h2>
          <p className="text-[#150a44] mb-4">
            Ehsan Night Riders is a professional cricket team dedicated to excellence, innovation, and bringing the best
            of cricket to our passionate fans. Founded with a vision to create a legacy in the sport, we combine
            traditional cricket values with modern training techniques.
          </p>
          <p className="text-[#150a44] mb-6">
            Our team comprises world-class players, experienced coaches, and dedicated support staff working together to
            achieve greatness on and off the field. We believe in teamwork, discipline, and the spirit of the game.
          </p>
          <button className="btn-primary hover:bg-blue-800">Learn More</button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-96 rounded-xl overflow-hidden"
        >
          <img src="/cricket-team-training-session.jpg" alt="Team Training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
