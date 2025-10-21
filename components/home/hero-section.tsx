"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-150 flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage:
          "url('/cri.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-xl shadow-accent/30">
            
              <img src="/logo.jpeg" alt="" />
            
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold  text-white"
        >
          Ehsan Night Riders
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed pt-4"
        >
          Experience the power of professional cricket with world-class players and thrilling matches
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 rounded-full bg-blue-800 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-300">
            Join the Riders Family
          </button>
          <button className="px-8 py-3 rounded-full border border-white/40 text-white hover:bg-blue-800  font-semibold text-lg transition-all duration-300">
            Watch Highlights
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
      
      </motion.div>
    </section>
  )
}
