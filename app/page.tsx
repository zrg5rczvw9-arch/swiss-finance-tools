'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'
import { CalculatorsSection } from '@/components/calculators-section'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
  window.scrollTo(0, 0)
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
