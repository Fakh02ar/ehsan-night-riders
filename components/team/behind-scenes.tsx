"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const scenes = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
]

export default function BehindScenes() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12 text-center">Behind the Scenes</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenes.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative h-80 rounded-lg overflow-hidden group"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Behind the scenes ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
