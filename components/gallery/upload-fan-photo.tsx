"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Upload } from "lucide-react"

export default function UploadFanPhoto() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative rounded-2xl overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />

        {/* Content */}
        <div className="relative z-10 text-center py-16 px-8">
          <div className="flex justify-center mb-6">
            <Upload className="text-primary" size={48} />
          </div>
          <h2 className="text-primary mb-4">Share Your Moment</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Upload your favorite cricket moments and fan photos. Your best shots could be featured on our gallery!
          </p>
          <button className="btn-primary">Upload Photo</button>
        </div>
      </motion.div>
    </section>
  )
}
