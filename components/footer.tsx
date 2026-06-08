'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="about" className="bg-card border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-accent"
                  fill="currentColor"
                >
                  <rect x="10" y="4" width="4" height="16" />
                  <rect x="4" y="10" width="16" height="4" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-semibold text-primary">
                Swiss Finance Tools
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Simple and powerful financial calculators built with Swiss precision. Plan your future, explore different scenarios and make more confident financial decisions.
            </p>
            
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-semibold text-primary mb-4">Calculators</h4>
            <ul className="space-y-3">
              {[
  {
    name: 'ETF Calculator',
    href: '/etf-calculator',
  },
  {
    name: 'Millionaire Calculator',
    href: '/millionaire-calculator',
  },
 
  
  {
    name: 'FIRE Calculator',
    href: '#',
  },
  {
    name: 'Swiss Pillar 3a Calculator',
    href: '#',
  },
].map((item) => (
  <li key={item.name}>
    <div className="flex items-center justify-between">
      <Link
        href={item.href}
        className="text-muted-foreground hover:text-accent transition-colors text-sm"
      >
        {item.name}
      </Link>

      {item.href === '#' && (
        <span className="px-1.5 py-0.5 text-[9px] font-medium rounded-full bg-yellow-500/10 text-yellow-600">
          Soon
        </span>
      )}
    </div>
  </li>
))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
           <h4 className="font-serif font-semibold text-primary mb-4">
  Information
</h4>

<ul className="space-y-3">
  <li>
    <Link
      href="/about"
      className="text-muted-foreground hover:text-accent transition-colors text-sm"
    >
      About
    </Link>
  </li>

  <li>
    <Link
      href="/contact"
      className="text-muted-foreground hover:text-accent transition-colors text-sm"
    >
      Contact
    </Link>
  </li>

  <li>
    <Link
      href="/financial-knowledge"
      className="text-muted-foreground hover:text-accent transition-colors text-sm"
    >
      Financial-Knowledge
    </Link>
  </li>

  {['Privacy Policy'].map((item) => (
    <li key={item}>
      <div className="flex items-center justify-between">
        <Link
          href="#"
          className="text-muted-foreground hover:text-accent transition-colors text-sm"
        >
          {item}
        </Link>

        <span className="px-1.5 py-0.5 text-[9px] font-medium rounded-full bg-yellow-500/10 text-yellow-600">
          Soon
        </span>
      </div>
    </li>
  ))}
</ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Swiss Finance Tools.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span>Designed and built in Switzerland 🇨🇭</span>
            
          </p>
        </div>
      </div>
    </footer>
  )
}
