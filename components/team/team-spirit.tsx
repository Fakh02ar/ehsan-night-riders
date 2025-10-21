"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, Zap, Target } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We play with heart and dedication, giving our best in every match.",
  },
  {
    icon: Zap,
    title: "Energy",
    description: "Dynamic and aggressive cricket that excites our fans and opponents.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for perfection in every aspect of our game.",
  },
]

export default function TeamSpirit() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12 text-center">Team Spirit</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="card-base text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-background" />
                </div>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
