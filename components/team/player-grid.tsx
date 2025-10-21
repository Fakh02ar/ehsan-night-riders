"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const players = [
  { name: "Ahmed Khan", role: "Opening Batsman", image: "/cricket-batsman.png" },
  { name: "Hassan Ali", role: "Fast Bowler", image: "/cricket-bowler.jpg" },
  { name: "Usman Malik", role: "All-rounder", image: "/cricket-all-rounder.jpg" },
  { name: "Imran Farooq", role: "Wicket Keeper", image: "/placeholder-x0skn.png" },
  { name: "Samir Ahmed", role: "Spin Bowler", image: "/cricket-spinner.jpg" },
  { name: "Faisal Khan", role: "Middle Order", image: "/cricket-batsman.png" },
]

export default function PlayerGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container  rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12 text-center">Squad</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="card-base group bg-[#150a44]"
            >
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={player.image || "/placeholder.svg"}
                  alt={player.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white mb-1">{player.name}</h3>
              <p className="text-accent font-semibold">{player.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
