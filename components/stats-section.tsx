'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  {
    value: '2',
    label: 'Calculators',
  },
  {
    value: '4',
    label: 'Global Currencies',
  },
  {
    value: '24/7',
    label: 'Worldwide Access',
  },
  {
    value: 'Free',
    label: 'Unlimited Calculations',
  },
]

export function StatsSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -100]
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  )

  return (
    <section
      ref={ref}
      className="py-24 bg-secondary relative overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary mb-2">
                {stat.value}
              </div>

              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}