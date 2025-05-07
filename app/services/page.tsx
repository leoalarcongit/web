import { Camera, Film, Scissors, Users, Building, Award } from "lucide-react"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Camera className="h-12 w-12 mb-6" />,
      title: "Fotografía",
      description:
        "Servicios profesionales de fotografía para diversos contextos y necesidades, desde retratos personales hasta fotografía comercial.",
      features: [
        "Retratos artísticos y corporativos",
        "Fotografía de eventos y bodas",
        "Fotografía de paisajes y arquitectura",
        "Fotografía de producto y comercial",
        "Sesiones personalizadas",
      ],
    },
    {
      icon: <Film className="h-12 w-12 mb-6" />,
      title: "Videografía",
      description:
        "Producción de video de alta calidad con enfoque cinematográfico para proyectos personales, comerciales y documentales.",
      features: [
        "Videografía de eventos y bodas",
        "Producción de documentales",
        "Videos corporativos y promocionales",
        "Contenido para redes sociales",
        "Filmación aérea con drones",
      ],
    },
    {
      icon: <Scissors className="h-12 w-12 mb-6" />,
      title: "Edición",
      description:
        "Servicios de post-producción para fotografía y video, desde retoque básico hasta edición avanzada con efectos especiales.",
      features: [
        "Retoque fotográfico profesional",
        "Corrección y gradación de color",
        "Montaje y edición de video",
        "Efectos visuales y animación",
        "Restauración de fotografías antiguas",
      ],
    },
  ]

  const specializedServices = [
    {
      icon: <Users className="h-10 w-10 mb-4" />,
      title: "Eventos",
      description:
        "Cobertura completa de eventos sociales, corporativos y especiales con un enfoque discreto y profesional.",
    },
    {
      icon: <Building className="h-10 w-10 mb-4" />,
      title: "Corporativo",
      description:
        "Servicios visuales para empresas, incluyendo fotografía de producto, retratos corporativos y videos institucionales.",
    },
    {
      icon: <Award className="h-10 w-10 mb-4" />,
      title: "Fine Art",
      description: "Fotografía artística de alta calidad para coleccionistas, galerías y publicaciones especializadas.",
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios</h1>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Ofrezco una amplia gama de servicios profesionales en fotografía, videografía y edición, adaptados a las
            necesidades específicas de cada cliente.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div
              key={index}
              id={service.title.toLowerCase()}
              className="bg-zinc-900 p-8 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div>
                {service.icon}
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-white/70 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-2">•</span>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mi Proceso de Trabajo</h2>
            <div className="w-16 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Un enfoque metódico y personalizado para cada proyecto, garantizando resultados excepcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black p-6 rounded-lg border border-white/10 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Consulta</h3>
              <p className="text-white/70 text-sm">
                Reunión inicial para entender tus necesidades, objetivos y visión del proyecto.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-white/10 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Planificación</h3>
              <p className="text-white/70 text-sm">
                Desarrollo de un plan detallado, incluyendo cronograma, locaciones y aspectos técnicos.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-white/10 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Producción</h3>
              <p className="text-white/70 text-sm">
                Ejecución del proyecto con equipamiento profesional y técnicas avanzadas.
              </p>
            </div>

            <div className="bg-black p-6 rounded-lg border border-white/10 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Entrega</h3>
              <p className="text-white/70 text-sm">
                Post-producción cuidadosa y entrega del material final en los formatos acordados.
              </p>
            </div>
          </div>
        </div>

        {/* Specialized Services */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Servicios Especializados</h2>
            <div className="w-16 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Servicios adaptados a necesidades específicas y contextos particulares.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div
                key={index}
                id={service.title.toLowerCase().replace(" ", "-")}
                className="bg-zinc-900 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
