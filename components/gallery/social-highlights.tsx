"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Heart, MessageCircle, Share2 } from "lucide-react"

const posts = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=300",
    likes: 2500,
    comments: 180,
    shares: 320,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=300",
    likes: 3200,
    comments: 245,
    shares: 410,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=300",
    likes: 1800,
    comments: 120,
    shares: 280,
  },
]

export default function SocialHighlights() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container bg-surface/50 rounded-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12">Social Media Highlights</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="card-base"
            >
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={`Post ${post.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-around text-muted">
                <div className="flex items-center gap-2">
                  <Heart size={18} className="text-primary" />
                  <span className="text-sm">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle size={18} className="text-primary" />
                  <span className="text-sm">{post.comments}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 size={18} className="text-primary" />
                  <span className="text-sm">{post.shares}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
