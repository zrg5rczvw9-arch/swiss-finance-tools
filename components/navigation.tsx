'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const menuItems = [
  { label: 'ETF Calculator', href: '/etf-calculator' },
  { label: 'Millionaire Calculator', href: '/millionaire-calculator' },
  { label: 'Retirement Calculator', href: '/retirement-calculator' },
  { label: 'Financial Knowledge', href: '/financial-knowledge' },
  { label: 'About', href: '/about' },
]
  

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    setTimeout(() => {
      window.location.href = '/'
    }, 500)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            onClick={goHome}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-accent"
                fill="currentColor"
              >
                <rect x="10" y="4" width="4" height="16" />
                <rect x="4" y="10" width="16" height="4" />
              </svg>
            </div>

            <span className="font-serif text-lg font-semibold text-primary hidden sm:block">
              Swiss Finance
            </span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-primary hover:text-accent transition-colors"
            aria-label="Open menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-12">
                  <span className="font-serif text-xl font-semibold text-primary">
                    Menu
                  </span>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-primary hover:text-accent transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
  href={item.href}
  onClick={() => setIsOpen(false)}
  className="flex items-center justify-between py-4 px-4 text-lg text-primary hover:text-accent hover:bg-muted rounded-lg transition-all font-medium"
>
  <span>{item.label}</span>

  {![
  'ETF Calculator',
  'Millionaire Calculator',
  'Retirement Calculator',
  'About',
  'Financial Knowledge',
].includes(item.label) && (
    <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-600">
      Coming Soon
    </span>
  )}
</Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}