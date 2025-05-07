import HeroSection from "@/components/hero-section"
import PortfolioPreview from "@/components/portfolio-preview"
import ServicesPreview from "@/components/services-preview"
import AboutPreview from "@/components/about-preview"
import ContactCta from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PortfolioPreview />
      <ServicesPreview />
      <AboutPreview />
      <ContactCta />
    </div>
  )
}
