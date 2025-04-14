import HeroSection from './HeroSection'
import FeatureSection from './features'
import TestimonialsSection from './testimonies'
import PricingSection from './pricing'
import FAQSection from './faq'
import AppAndFooterSection from './footer'
import './globals.css'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection/>
      <PricingSection />
      <FAQSection />
      <AppAndFooterSection />
    </main>
  )
}
