'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Swiss Precision',
    description: 'Our calculators are built with the meticulous attention to detail that defines Swiss excellence.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Bank-Level Security',
    description: 'Your financial data is protected with enterprise-grade encryption and privacy standards.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Expert Research',
    description: 'Built on years of financial research and validated by industry professionals.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
]

export function FeaturesSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <section id="knowledge" ref={containerRef} className="py-32 bg-primary relative overflow-hidden scroll-mt-20">
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-accent rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 border border-accent/50 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 border border-accent/30 rounded-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mb-6 text-balance">
              Financial Excellence, Swiss Standards
            </h2>
            <p className="text-lg text-primary-foreground/70 leading-relaxed mb-8">
              We combine centuries of Swiss banking tradition with modern technology to deliver financial tools that meet the highest standards of accuracy and reliability.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-accent/20 border-2 border-primary flex items-center justify-center text-accent text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-primary-foreground/70 text-sm">
                <span className="text-accent font-semibold">10,000+</span> satisfied users
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-dark rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
