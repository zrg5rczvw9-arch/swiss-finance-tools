'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    title: 'Investing Basics',
    description:
      'Learn how ETFs, stocks and compound interest work.',
  },
  {
    title: 'Swiss Retirement System',
    description:
      'Understand Pillar 1, Pillar 2 and Pillar 3a in Switzerland.',
  },
  {
    title: 'Personal Finance',
    description:
      'Build better money habits and grow long-term wealth.',
  },
]

export function FinancialKnowledgeSection() {
  return (
    <section className="py-24 px-6 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
            Financial Education
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary mb-4">
            Financial Knowledge
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn investing, retirement planning and personal finance through simple guides.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="bg-white border border-amber-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                {article.title}
              </h3>

              <p className="text-muted-foreground">
                {article.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/financial-knowledge"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition"
          >
            Explore Financial Knowledge →
          </Link>
        </div>
      </div>
    </section>
  )
}