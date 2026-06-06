'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const calculators = [
  {
    id: 'etf',
    title: 'ETF Savings Plan Calculator',
    description: 'Plan your ETF strategy and see how regular investing can grow your wealth over time.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l4-4 4 4 5-5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="9" r="2" />
      </svg>
    ),
    stats: { label: 'Strategy', value: 'Passive' },
  },
  {
  id: 'millionaire',
  title: 'Millionaire Goal Calculator',
  description:
    'See how long it could take to reach your first million through investing.',
  icon: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v18" />
      <path d="M6 9h12" />
      <path d="M6 15h12" />
    </svg>
  ),
  stats: { label: 'Goal', value: 'Millionaire' },
},
  {
    id: 'compound',
    title: 'Compound Interest Calculator',
    description: '',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" strokeLinecap="round" />
        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
        <path d="M12 6a6 6 0 0 1 6 6" strokeLinecap="round" />
      </svg>
    ),
    stats: { label: '', value: '' },
  },
  {
    id: 'fire',
    title: 'FIRE Calculator',
    description: '',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z" />
        <path d="M12 22v-6" strokeLinecap="round" />
      </svg>
    ),
    stats: { label: '', value: '' },
  },
  {
    id: 'pillar3a',
    title: 'Swiss Pillar 3a Calculator',
    description: '',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 21h18" strokeLinecap="round" />
        <path d="M5 21V7l7-4 7 4v14" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="13" width="6" height="8" rx="1" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
    stats: { label: '', value: '' },
  },
]

export function CalculatorsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="calculators" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Wealth Building Tools
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary mb-4 text-balance">
            Financial Planning Calculators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with Swiss precision to help you plan, grow and understand your finances.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, index) => (
  <Link
    key={calc.id}
    href={
  calc.id === 'etf'
    ? '/etf-calculator'
    : calc.id === 'millionaire'
    ? '/millionaire-calculator'
    : '#'
}
  >
    <motion.div
              key={calc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(calc.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors mb-6">
                  {calc.icon}
                </div>

                <h3 className="text-xl font-serif font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                  {calc.title}
                </h3>
                
                {!['etf', 'millionaire'].includes(calc.id) && (
  <span className="inline-block px-2 py-1 mb-3 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-600">
    Coming Soon
  </span>
)}

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {calc.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {calc.stats.label}
                    </div>
                    <div className="text-lg font-serif font-semibold text-primary">
                      {calc.stats.value}
                    </div>
                  </div>

                  <motion.div
                    animate={{ x: hoveredId === calc.id ? 5 : 0 }}
                    className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-primary-foreground transition-colors"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.div>
                </div>
              </div>
           </motion.div>
  </Link>
))
}
        </div>
      </div>
    </section>
  )
}
