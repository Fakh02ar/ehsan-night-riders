"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const results = [
  {
    id: 1,
    opponent: "Multan Sultans",
    result: "Won",
    score: "185/7",
    oppositionScore: "178/9",
    date: "2024-11-10",
  },
  {
    id: 2,
    opponent: "Quetta Gladiators",
    result: "Won",
    score: "156/8",
    oppositionScore: "152/9",
    date: "2024-11-08",
  },
  {
    id: 3,
    opponent: "Rawalpindi Rangers",
    result: "Lost",
    score: "142/10",
    oppositionScore: "145/6",
    date: "2024-11-05",
  },
]

export default function PastResults() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12">Recent Results</h2>

        <div className="space-y-4">
          {results.map((result, idx) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="card-base"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div>
                  <p className="text-muted text-sm">{new Date(result.date).toLocaleDateString()}</p>
                  <h3 className="text-lg font-serif font-bold text-primary">{result.opponent}</h3>
                </div>
                <div className="text-center">
                  <p className="text-muted text-sm">ENR</p>
                  <p className="text-xl font-bold text-text">{result.score}</p>
                </div>
                <div className="text-center">
                  <span
                    className={`px-3 py-1 rounded-full font-semibold ${
                      result.result === "Won" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {result.result}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-muted text-sm">Opposition</p>
                  <p className="text-xl font-bold text-text">{result.oppositionScore}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
