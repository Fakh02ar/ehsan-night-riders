"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-primary mb-4">Contact Us</h1>
        <p className="text-muted mb-12">Get in touch with Ehsan Night Riders</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="card-base"
          >
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-primary" size={24} />
              <h3 className="font-serif font-bold text-primary">Email</h3>
            </div>
            <p className="text-muted">info@ehsannightriders.com</p>
            <p className="text-muted text-sm">support@ehsannightriders.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card-base"
          >
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-primary" size={24} />
              <h3 className="font-serif font-bold text-primary">Phone</h3>
            </div>
            <p className="text-muted">+92 300 1234567</p>
            <p className="text-muted text-sm">+92 21 3456789</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-base"
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="text-primary" size={24} />
              <h3 className="font-serif font-bold text-primary">Location</h3>
            </div>
            <p className="text-muted">National Stadium</p>
            <p className="text-muted text-sm">Karachi, Pakistan</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="card-base mt-12"
        >
          <h2 className="text-primary mb-8">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
