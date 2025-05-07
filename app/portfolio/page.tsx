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
      title: "Retrato artístico en blanco y negro",
      category: "retratos",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Sesión de retratos artísticos con iluminación dramática y procesado en blanco y negro.",
    },
    {
      id: 2,
      title: "Paisaje al atardecer",
      category: "paisajes",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Captura de paisaje natural durante la hora dorada con colores vibrantes y composición cuidada.",
    },
    {
      id: 3,
      title: "Fotografía de boda",
      category: "bodas",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Momento emotivo capturado durante una ceremonia de boda en exteriores.",
    },
    {
      id: 4,
      title: "Campaña publicitaria",
      category: "comercial",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Fotografía de producto para campaña publicitaria con iluminación de estudio.",
    },
    {
      id: 5,
      title: "Documental - Naturaleza Salvaje",
      category: "video",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Documental sobre la vida salvaje filmado en 4K con técnicas cinematográficas.",
    },
    {
      id: 6,
      title: "Retoque profesional",
      category: "edicion",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Trabajo de retoque profesional para fotografía de moda con técnicas avanzadas.",
    },
    {
      id: 7,
      title: "Retrato corporativo",
      category: "retratos",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Sesión de retratos corporativos para ejecutivos con estilo profesional y moderno.",
    },
    {
      id: 8,
      title: "Paisaje montañoso",
      category: "paisajes",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Fotografía de paisaje de montaña capturada al amanecer con niebla y luz natural.",
    },
    {
      id: 9,
      title: "Momento especial de boda",
      category: "bodas",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Captura de un momento íntimo y emotivo durante los preparativos de una boda.",
    },
    {
      id: 10,
      title: "Campaña Publicitaria - Marca Premium",
      category: "video",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Video publicitario para marca de lujo con estética cinematográfica y narrativa visual.",
    },
    {
      id: 11,
      title: "Antes/Después - Retoque de Belleza",
      category: "edicion",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Ejemplo de retoque de belleza con técnicas no destructivas para preservar la naturalidad.",
    },
    {
      id: 12,
      title: "Fotografía de producto",
      category: "comercial",
      image: "/placeholder.svg?height=800&width=1200",
      description: "Fotografía de producto para catálogo online con iluminación técnica y composición limpia.",
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
