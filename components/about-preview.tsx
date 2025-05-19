import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const AboutPreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/leonardo.webp?height=800&width=800"
              alt="Fotógrafo profesional"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mí</h2>
            <div className="w-20 h-1 bg-white/20 mb-8"></div>

            <p className="text-white/80 mb-6">
              Soy un fotógrafo y videógrafo apasionado con más de 10 años de experiencia en la industria. Mi enfoque
              combina técnicas tradicionales con innovación digital para crear imágenes y videos que cuentan historias
              impactantes.
            </p>

            <p className="text-white/80 mb-8">
              He trabajado con clientes de diversos sectores, desde bodas íntimas hasta grandes marcas comerciales. Mi
              objetivo siempre es capturar la esencia auténtica de cada proyecto, creando contenido visual que perdure
              en el tiempo.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-zinc-900 px-4 py-2 rounded">
                <span className="text-2xl font-bold">10+</span>
                <p className="text-white/60 text-sm">Años de experiencia</p>
              </div>
              <div className="bg-zinc-900 px-4 py-2 rounded">
                <span className="text-2xl font-bold">200+</span>
                <p className="text-white/60 text-sm">Proyectos completados</p>
              </div>
              <div className="bg-zinc-900 px-4 py-2 rounded">
                <span className="text-2xl font-bold">50+</span>
                <p className="text-white/60 text-sm">Clientes satisfechos</p>
              </div>
            </div>

            <Button asChild>
              <Link href="/about">Conocer más</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
