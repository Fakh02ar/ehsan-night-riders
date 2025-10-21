"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star } from "lucide-react"

export default function CaptainProfile() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12 text-center">Team Leadership</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Captain */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-base bg-[#150a44]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src="/cap.jpeg" alt="Captain" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Ehsan Younis</h3>
                <p className="text-accent flex items-center gap-1">
                  <Star size={16} /> Team Captain
                </p>
              </div>
            </div>
            <p className="text-muted mb-4">
              Ehsan Rajoka is an exceptional leader with 15 years of international cricket experience. Known for his
              strategic acumen and batting prowess, he leads the team with passion and dedication.
            </p>
            <div className="space-y-2 text-sm text-white">
              <p>
                <span className="text-white font-semibold">Career Avg:</span> 45.2
              </p>
              <p>
                <span className="text-white font-semibold">Centuries:</span> 28
              </p>
              <p>
                <span className="text-white font-semibold">Matches:</span> 156
              </p>
            </div>
          </motion.div>

          {/* Coach */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-base bg-[#150a44]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src="/spon.jpeg" alt="Coach" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Noman Rajoka from UK</h3>
                <p className="text-accent">Sponcership</p>
              </div>
            </div>
           <p className="text-white mb-4">
  Ehsan Night Riders proudly acknowledge the generous sponsorship of Mr. Noman Rajoka from the United Kingdom.  
 
</p>

           <div className="space-y-2 text-sm text-white">
  <p>
    <span className="text-white font-semibold">Sponsor Name:</span> Noman Rajoka
  </p>
  <p>
    <span className="text-white font-semibold">Country:</span> United Kingdom
  </p>
  <p>
    <span className="text-white font-semibold">Contribution:</span> Official Team Sponsor & Support Partner
  </p>
</div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
