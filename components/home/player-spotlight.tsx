"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

const players = [
  {
    id: 1,
    name: "Abdullah Aslam",
    position: "Opening Batsman",
    stats: "Avg: 45.2 | SR: 92.5",
    image: "/cricket-player-batsman.jpg",
  },
  {
    id: 2,
    name: "Faizan Jutt",
    position: "Fast Bowler",
    stats: "Avg: 28.3 | Econ: 7.2",
    image: "/cricket-player-bowler.jpg",
  },
  {
    id: 3,
    name: "Ali AJ",
    position: "All-rounder",
    stats: "Avg: 38.5 | Wkts: 45",
    image: "/cricket-player-all-rounder.jpg",
  },
  {
    id: 4,
    name: "Faizan Asraf",
    position: "Wicket Keeper",
    stats: "Avg: 32.1 | Catches: 52",
    image: "/cricket-player-wicket-keeper.jpg",
  },
  {
    id: 5,
    name: "Fakhar",
    position: "Spin Bowler, Batsman",
    stats: "Avg: 25.8 | Econ: 6.1",
    image: "/cricket-player-spinner.jpg",
  },
  {
    id: 6,
    name: "Ehsan Rajoka (Captain)",
    position: "Team Captain / Middle Order Batsman",
    stats: "Avg: 50.3 | SR: 99.1",
    image: "/cricket-player-captain.jpg",
  },
  {
    id: 7,
    name: "Taha Faiz",
    position: "Right Arm Fast Bowler",
    stats: "Avg: 27.6 | Econ: 6.9",
    image: "/cricket-player-fast.jpg",
  },
  {
    id: 8,
    name: "Usama Aslam",
    position: "Top Order Batsman",
    stats: "Avg: 42.8 | SR: 90.2",
    image: "/cricket-player-toporder.jpg",
  },
  {
    id: 9,
    name: "Ali Mughal",
    position: "All-rounder",
    stats: "Avg: 35.5 | Wkts: 38",
    image: "/cricket-player-allround.jpg",
  },
  {
    id: 10,
    name: "Aman Younis",
    position: "Alrounder",
    stats: "Avg: 22.4 | Econ: 5.8",
    image: "/cricket-player-offspinner.jpg",
  },
  {
    id: 11,
    name: "Hassan Faiz",
    position: "leg spinner",
    stats: "Major Sponsor & Mentor",
    image: "/cricket-sponsor.jpg",
  },
]

export default function PlayerSpotlight() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const next = () => setCurrent((current + 1) % players.length)
  const prev = () => setCurrent((current - 1 + players.length) % players.length)

  return (
    <section ref={ref} className="section-container bg-[#150a44]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-white mb-12 text-center text-3xl font-bold">Player Spotlight</h2>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            <AnimatePresence mode="wait">
              {players.map((player, idx) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === current ? 1 : 0.5 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setCurrent(idx)}
                  className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                    idx === current ? "ring-2 ring-primary scale-105" : ""
                  }`}
                >
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="card-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.img
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                src={players[current].image}
                alt={players[current].name}
                className="w-full h-96 object-cover rounded-lg"
              />

              <motion.div
                key={`info-${current}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-white mb-2 text-2xl font-bold">{players[current].name}</h3>
                <p className="text-accent text-lg font-semibold mb-4">{players[current].position}</p>
                <p className="text-muted mb-6">{players[current].stats}</p>
                <p className="text-text mb-6">
                  A talented player with exceptional skills and dedication to the sport. Known for consistent
                  performances, teamwork, and sportsmanship.
                </p>

                <div className="flex gap-4">
                  <button onClick={prev} className="btn-secondary p-3 text-white border-white">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={next} className="btn-secondary p-3 text-white border-white">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
