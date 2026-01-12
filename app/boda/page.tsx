import WeddingHero from "@/components/wedding-hero"
import WeddingGallery from "@/components/wedding-gallery"
import CoupleStory from "@/components/couple-story"
import ContactCta from "@/components/contact-cta"

export const metadata = {
  title: "Nuestra Boda | Galería de Momentos Especiales",
  description: "Galería multimedia de nuestra boda - Revive los momentos más especiales de nuestro día perfecto",
}

export default function BodaPage() {
  return (
    <div className="flex flex-col">
      <WeddingHero />
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Momentos Especiales
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Revive con nosotros cada momento mágico de nuestro día perfecto
            </p>
          </div>
          <WeddingGallery />
        </div>
      </section>
      <CoupleStory />
      <ContactCta />
    </div>
  )
}
