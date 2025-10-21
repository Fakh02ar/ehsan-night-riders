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
]

export default function UpcomingMatches() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12 text-center">Upcoming Matches</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matches.map((match, idx) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="card-base group bg-[#150a44]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                  {match.type}
                </span>
                <span className="text-primary font-bold">vs</span>
              </div>

              <h3 className="text-xl text-white font-serif font-bold mb-4 group-hover:text-[#bb2364] transition-colors">
                {match.opponent}
              </h3>

              <div className="space-y-3 text-muted">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span>{new Date(match.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span>{match.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>{match.venue}</span>
                </div>
              </div>

              <button className="btn-primary hover:bg-[#bb2364] w-full mt-6">Book Tickets</button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
