"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TeamIntro() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[#150a44] mb-6">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-[#150a44]">Team Introduction</h2>
            <p className="text-[#150a44] mb-4">
              Ehsan Night Riders is composed of the finest cricket talent in the region. Our team brings together
              experienced veterans and promising young players, all united by a passion for excellence.
            </p>
            <p className="text-[#150a44] mb-4">
              Our mission is to play attacking, entertaining cricket while maintaining the highest standards of
              sportsmanship and professionalism.
            </p>
            <h3 className="text-xl font-serif font-bold text-[#150a44] mb-2">Team Values</h3>
            <ul className="space-y-2 text-[#150a44]">
              <li>✓ Excellence in Performance</li>
              <li>✓ Teamwork and Unity</li>
              <li>✓ Integrity and Sportsmanship</li>
              <li>✓ Continuous Improvement</li>
            </ul>
          </div>
          <motion.img
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            src="/cricket-team-group-photo.jpg"
            alt="Team"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  )
}
