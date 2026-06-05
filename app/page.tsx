'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { CalculatorsSection } from '@/components/calculators-section'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'

export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    })
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <CalculatorsSection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}