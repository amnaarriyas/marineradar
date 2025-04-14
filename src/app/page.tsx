import HeroSection from './HeroSection'
import FeatureSection from './features'
import TestimonialsSection from './testimonies'
import PricingSection from './pricing'
import FAQSection from './faq'
import AppAndFooterSection from './footer'
import './globals.css'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section id="hero" className="scroll-mt-20">
        <HeroSection />
      </section>
      <section id="features" className="mt-20">
        <FeatureSection />
      </section>
      <section id="testimonials" className="mt-20">
        <TestimonialsSection />
      </section>
      <section id="pricing" className="mt-20">
        <PricingSection />
      </section>
      <section id="faq" className="mt-20">
        <FAQSection />
      </section>
      <section id="footer" className="mt-20">
        <AppAndFooterSection />
      </section>
    </main>
  )
}
