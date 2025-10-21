"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const categories = ["All", "Matches", "Practice", "Events", "Fans"]

const galleryItems = [
  { id: 1, category: "Matches", image: "/placeholder.svg?height=300&width=400" },
  { id: 2, category: "Practice", image: "/placeholder.svg?height=300&width=400" },
  { id: 3, category: "Events", image: "/placeholder.svg?height=300&width=400" },
  { id: 4, category: "Fans", image: "/placeholder.svg?height=300&width=400" },
  { id: 5, category: "Matches", image: "/placeholder.svg?height=300&width=400" },
  { id: 6, category: "Practice", image: "/placeholder.svg?height=300&width=400" },
  { id: 7, category: "Events", image: "/placeholder.svg?height=300&width=400" },
  { id: 8, category: "Fans", image: "/placeholder.svg?height=300&width=400" },
]

export default function FilteredGallery() {
  const [activeFilter, setActiveFilter] = useState("All")
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-8">Photo Gallery</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === category
                  ? "bg-primary text-background"
                  : "bg-surface border border-border text-text hover:border-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="wait">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Gallery ${item.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
