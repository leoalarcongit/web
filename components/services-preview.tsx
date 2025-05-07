import { Camera, Film, Scissors } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const ServicesPreview = () => {
  const services = [
    {
      icon: <Camera className="h-10 w-10 mb-6" />,
      title: "Fotografía",
      description:
        "Sesiones fotográficas profesionales para retratos, eventos, bodas, paisajes y más. Capturando la esencia de cada momento con un estilo único.",
      features: ["Retratos", "Bodas", "Eventos", "Paisajes", "Corporativo"],
    },
    {
      icon: <Film className="h-10 w-10 mb-6" />,
      title: "Videografía",
      description:
        "Producción de video de alta calidad para documentales, eventos, publicidad y contenido para redes sociales con un enfoque cinematográfico.",
      features: ["Documentales", "Eventos", "Publicidad", "Redes Sociales", "Aéreo"],
    },
    {
      icon: <Scissors className="h-10 w-10 mb-6" />,
      title: "Edición",
      description:
        "Servicios de post-producción para fotografía y video, incluyendo retoque, corrección de color, efectos especiales y montaje.",
      features: ["Retoque", "Color Grading", "Montaje", "Efectos", "Animación"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios profesionales para satisfacer tus necesidades creativas y visuales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <ul className="mb-8 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white/80">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/services">Ver Todos los Servicios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
