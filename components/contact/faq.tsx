"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How can I buy tickets for matches?",
    answer:
      "You can purchase tickets through our website or at the stadium ticket counter. Visit the Matches page for upcoming fixtures and booking options.",
  },
  {
    question: "Where can I find match schedules?",
    answer: "All upcoming matches and schedules are listed on our Matches page with dates, times, and venues.",
  },
  {
    question: "How do I become a sponsor?",
    answer:
      "Contact us through the Sponsorship Inquiry form on this page, and our team will get back to you with available packages.",
  },
  {
    question: "Can I upload my photos to the gallery?",
    answer: 'Yes! Visit our Gallery page and use the "Upload Your Fan Photo" section to share your cricket moments.',
  },
  {
    question: "How do I join the team?",
    answer:
      'Fill out the "Join Our Team" form on this page with your details and cricket background. Our recruitment team will review your application.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary mb-12">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="card-base"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="font-serif font-bold text-primary">{faq.question}</h3>
                <motion.div animate={{ rotate: openIndex === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="text-primary" size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-border"
                  >
                    <p className="text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
