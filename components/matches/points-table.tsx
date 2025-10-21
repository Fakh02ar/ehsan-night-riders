"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const standings = [
  { rank: 1, team: "Ehsan Night Riders", played: 8, won: 6, lost: 2, points: 12 },
  { rank: 2, team: "Karachi Kings", played: 8, won: 5, lost: 3, points: 10 },
  { rank: 3, team: "Lahore Qalandars", played: 8, won: 5, lost: 3, points: 10 },
  { rank: 4, team: "Islamabad United", played: 8, won: 4, lost: 4, points: 8 },
  { rank: 5, team: "Peshawar Zalmi", played: 8, won: 3, lost: 5, points: 6 },
]

export default function PointsTable() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12">Points Table</h2>

        <div className="card-base overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-primary font-semibold">Rank</th>
                <th className="text-left py-4 px-4 text-primary font-semibold">Team</th>
                <th className="text-center py-4 px-4 text-primary font-semibold">Played</th>
                <th className="text-center py-4 px-4 text-primary font-semibold">Won</th>
                <th className="text-center py-4 px-4 text-primary font-semibold">Lost</th>
                <th className="text-center py-4 px-4 text-primary font-semibold">Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  className={`border-b border-border hover:bg-surface-light transition-colors ${
                    idx === 0 ? "bg-primary/10" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-text font-semibold">{row.rank}</td>
                  <td className="py-4 px-4 text-text">{row.team}</td>
                  <td className="py-4 px-4 text-center text-muted">{row.played}</td>
                  <td className="py-4 px-4 text-center text-green-400">{row.won}</td>
                  <td className="py-4 px-4 text-center text-red-400">{row.lost}</td>
                  <td className="py-4 px-4 text-center text-primary font-bold">{row.points}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}
