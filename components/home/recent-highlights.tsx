"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useInView } from "react-intersection-observer"

const highlights = [
  {
    id: 1,
    title: "Match Highlights vs Peshawar Zalmi",
    image: "/cricket-match-highlights.png",
  },
  {
    id: 2,
    title: "Century Celebration - Ahmed Khan",
    image: "/cricket-player-century.jpg",
  },
  {
    id: 3,
    title: "Bowling Masterclass - Hassan Ali",
    image: "/cricket-bowler-performance.jpg",
  },
]

export default function RecentHighlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-[#150a44]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-white mb-12 text-center">Recent Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group cursor-pointer rounded-lg overflow-hidden h-64"
            >
              <img
                src={highlight.image || "/placeholder.svg"}
                alt={highlight.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-background fill-background" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <p className="text-text font-semibold">{highlight.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
