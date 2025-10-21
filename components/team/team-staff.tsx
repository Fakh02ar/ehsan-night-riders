"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const staff = [
  { name: "Samir Khan", role: "Batting Coach", image: "/cricket-coach.jpg" },
  { name: "Hassan Ahmed", role: "Bowling Coach", image: "/cricket-coach.jpg" },
  { name: "Dr. Fatima", role: "Team Physician", image: "/caring-doctor.png" },
  { name: "Ali Raza", role: "Fitness Coach", image: "/diverse-fitness-trainer.png" },
]

export default function TeamStaff() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12 text-center">Support Staff</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {staff.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="card-base text-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-accent text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
