import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  const categories = [
    { id: "all", label: "Todos" },
    { id: "retratos", label: "Retratos" },
    { id: "paisajes", label: "Paisajes" },
    { id: "bodas", label: "Bodas" },
    { id: "comercial", label: "Comercial" },
    { id: "video", label: "Video" },
    { id: "edicion", label: "Edición" },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Fotografía Profesional 1",
      category: "retratos",
      image: "/img/landing/foto_1.jpg",
      description: "Captura profesional con técnicas avanzadas de iluminación y composición.",
    },
    {
      id: 2,
      title: "Fotografía Profesional 2",
      category: "paisajes",
      image: "/img/landing/foto_2.jpg",
      description: "Imagen artística que refleja mi estilo y visión fotográfica única.",
    },
    {
      id: 3,
      title: "Fotografía Profesional 3",
      category: "bodas",
      image: "/img/landing/foto_3.jpg",
      description: "Trabajo fotográfico que demuestra mi experiencia en diferentes estilos.",
    },
    {
      id: 4,
      title: "Fotografía Profesional 4",
      category: "comercial",
      image: "/img/landing/foto_4.jpg",
      description: "Sesión fotográfica profesional con atención al detalle y calidad técnica.",
    },
    {
      id: 5,
      title: "Fotografía Profesional 5",
      category: "video",
      image: "/img/landing/foto_5.jpg",
      description: "Captura que muestra mi dominio de la luz y la composición visual.",
    },
    {
      id: 6,
      title: "Fotografía Profesional 6",
      category: "edicion",
      image: "/img/landing/foto_6.jpg",
      description: "Trabajo fotográfico que ejemplifica mi estilo artístico y técnico.",
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portafolio</h1>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explora mi colección de trabajos en fotografía, videografía y edición. Cada proyecto refleja mi pasión por
            capturar momentos y contar historias visuales.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-12 h-auto bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-white data-[state=active]:text-black"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="gallery-grid">
              {portfolioItems.map((item) => (
                <div key={item.id} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover image-hover"
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="gallery-grid">
                {portfolioItems
                  .filter((item) => item.category === category.id)
                  .map((item) => (
                    <div key={item.id} className="group">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md mb-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover image-hover"
                        />
                      </div>
                      <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
