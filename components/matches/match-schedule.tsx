"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Clock } from "lucide-react"
import { useInView } from "react-intersection-observer"

const matches = [
  {
    id: 1,
    opponent: "Karachi Kings",
    date: "2024-11-15",
    time: "7:00 PM",
    venue: "National Stadium, Karachi",
    type: "T20",
  },
  {
    id: 2,
    opponent: "Lahore Qalandars",
    date: "2024-11-18",
    time: "3:00 PM",
    venue: "Gaddafi Stadium, Lahore",
    type: "ODI",
  },
  {
    id: 3,
    opponent: "Islamabad United",
    date: "2024-11-22",
    time: "7:30 PM",
    venue: "Rawalpindi Cricket Stadium",
    type: "T20",
  },
  {
    id: 4,
    opponent: "Peshawar Zalmi",
    date: "2024-11-25",
    time: "6:00 PM",
    venue: "Arbab Niaz Stadium, Peshawar",
    type: "T20",
  },
]

export default function MatchSchedule() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-primary mb-4">Matches</h1>
        <p className="text-muted mb-12">Upcoming fixtures and match schedule</p>

        <div className="space-y-4">
          {matches.map((match, idx) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="card-base"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                    {match.type}
                  </span>
                </div>
                <div>
                  <p className="text-muted text-sm">vs</p>
                  <h3 className="text-lg font-serif font-bold text-primary">{match.opponent}</h3>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Calendar size={16} className="text-primary" />
                  <span>{new Date(match.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Clock size={16} className="text-primary" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">{match.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
