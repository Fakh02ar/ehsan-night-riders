"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

interface LightboxProps {
  image: string
  onClose: () => void
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full"
      >
        <button onClick={onClose} className="absolute -top-12 right-0 text-primary hover:text-accent transition-colors">
          <X size={32} />
        </button>
        <img src={image || "/placeholder.svg"} alt="Lightbox" className="w-full h-auto rounded-lg" />
      </motion.div>
    </motion.div>
  )
}
