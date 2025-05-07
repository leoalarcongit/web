import Link from "next/link"
import { Button } from "@/components/ui/button"

const ContactCta = () => {
  return (
    <section className="py-20 px-4 bg-zinc-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para crear algo increíble?</h2>
        <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto">
          Estoy disponible para nuevos proyectos y colaboraciones. Contáctame para discutir cómo podemos trabajar
          juntos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Contactar ahora</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:border-white" asChild>
            <Link href="/portfolio">Ver portafolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactCta
