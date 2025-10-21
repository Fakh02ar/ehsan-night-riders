"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function LiveScore() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12">Live Score</h2>

        <div className="card-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-muted text-sm mb-2">Ehsan Night Riders</p>
              <p className="text-5xl font-bold text-primary mb-2">185/7</p>
              <p className="text-muted text-sm">20 overs</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-accent mb-2">vs</p>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                  <span className="text-background font-bold">●</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-muted text-sm mb-2">Karachi Kings</p>
              <p className="text-5xl font-bold text-text mb-2">178/9</p>
              <p className="text-muted text-sm">20 overs</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-accent font-semibold">ENR Won by 7 runs</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
