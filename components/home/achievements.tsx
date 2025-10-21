"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Target, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"

const achievements = [
  {
    icon: Trophy,
    title: "Tournament Wins",
    value: "12",
    description: "Major tournament victories",
  },
  {
    icon: Award,
    title: "Player Awards",
    value: "28",
    description: "Individual player awards",
  },
  {
    icon: Target,
    title: "Win Rate",
    value: "68%",
    description: "Overall match win rate",
  },
  {
    icon: Users,
    title: "Fan Base",
    value: "500K+",
    description: "Active supporters",
  },
]

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12 text-center">Team Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="card-base text-center bg-[#150a44]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-background" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{achievement.value}</h3>
                <p className="font-semibold mb-2 text-white">{achievement.title}</p>
                <p className="text-muted text-sm">{achievement.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
