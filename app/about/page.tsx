import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Award, Clock, Users } from "lucide-react"

export default function AboutPage() {
  const stats = [
    {
      icon: <Clock className="h-6 w-6 mb-2" />,
      value: "10+",
      label: "Años de experiencia",
    },
    {
      icon: <Camera className="h-6 w-6 mb-2" />,
      value: "500+",
      label: "Proyectos completados",
    },
    {
      icon: <Users className="h-6 w-6 mb-2" />,
      value: "100+",
      label: "Clientes satisfechos",
    },
    {
      icon: <Award className="h-6 w-6 mb-2" />,
      value: "15+",
      label: "Premios recibidos",
    },
  ]

  const skills = [
    { name: "Fotografía de retratos", level: 95 },
    { name: "Fotografía de paisajes", level: 90 },
    { name: "Videografía", level: 85 },
    { name: "Edición de fotografía", level: 90 },
    { name: "Edición de video", level: 80 },
    { name: "Iluminación", level: 95 },
  ]

  const testimonials = [
    {
      quote:
        "Un profesional excepcional que capturó perfectamente la esencia de nuestro día especial. Las fotografías son simplemente impresionantes.",
      author: "María y Juan",
      role: "Clientes de boda",
    },
    {
      quote:
        "Trabajar con este fotógrafo fue una experiencia increíble. Su ojo para el detalle y creatividad transformaron nuestra campaña publicitaria.",
      author: "Carlos Rodríguez",
      role: "Director de Marketing",
    },
    {
      quote:
        "Las imágenes que capturó de nuestro evento corporativo superaron todas nuestras expectativas. Profesional, creativo y muy fácil de trabajar.",
      author: "Laura Martínez",
      role: "Gerente de Eventos",
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h1>
            <div className="w-20 h-1 bg-white/20 mb-8"></div>

            <p className="text-white/80 mb-6">
              Soy un fotógrafo y videógrafo apasionado con más de 10 años de experiencia en la industria. Mi enfoque
              combina técnicas tradicionales con innovación digital para crear imágenes y videos que cuentan historias
              impactantes.
            </p>

            <p className="text-white/80 mb-6">
              Mi pasión por la fotografía comenzó cuando era niño, fascinado por la capacidad de capturar momentos y
              preservarlos para siempre. A lo largo de los años, he perfeccionado mi técnica y desarrollado un estilo
              único que se caracteriza por su atención al detalle, uso creativo de la luz y capacidad para capturar la
              emoción auténtica.
            </p>

            <p className="text-white/80 mb-8">
              He trabajado con clientes de diversos sectores, desde bodas íntimas hasta grandes marcas comerciales. Mi
              objetivo siempre es capturar la esencia auténtica de cada proyecto, creando contenido visual que perdure
              en el tiempo.
            </p>

            <Button asChild>
              <Link href="/contact">Contactar</Link>
            </Button>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src="/leonardo.webp?height=1200&width=900"
              alt="Fotógrafo profesional"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg text-center">
              <div className="flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mis Habilidades</h2>
            <div className="w-16 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Áreas de especialización y competencias técnicas desarrolladas a lo largo de mi carrera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <div className="bg-white h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mi Equipo</h2>
            <div className="w-16 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Utilizo equipamiento profesional de alta gama para garantizar la máxima calidad en todos mis proyectos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cámaras</h3>
              <ul className="space-y-2">
                <li className="text-white/80">• Sony Alpha A7R IV</li>
                <li className="text-white/80">• Canon EOS R5</li>
                <li className="text-white/80">• Fujifilm GFX 100S</li>
                <li className="text-white/80">• DJI Mavic 3 Pro</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Lentes</h3>
              <ul className="space-y-2">
                <li className="text-white/80">• Sony 24-70mm f/2.8 GM</li>
                <li className="text-white/80">• Sony 70-200mm f/2.8 GM</li>
                <li className="text-white/80">• Canon RF 50mm f/1.2L</li>
                <li className="text-white/80">• Canon RF 85mm f/1.2L</li>
                <li className="text-white/80">• Fujifilm GF 110mm f/2</li>
              </ul>
            </div>

            <div className="bg-zinc-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Accesorios</h3>
              <ul className="space-y-2">
                <li className="text-white/80">• Profoto B10 Plus (x4)</li>
                <li className="text-white/80">• DJI Ronin RS 3 Pro</li>
                <li className="text-white/80">• Manfrotto 055XPRO3</li>
                <li className="text-white/80">• Atomos Ninja V</li>
                <li className="text-white/80">• Sennheiser MKE 600</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
            <div className="w-16 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-white/80 max-w-2xl mx-auto">
              Lo que mis clientes dicen sobre mi trabajo y experiencia colaborando conmigo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                <div className="mb-4 text-2xl text-white/80">"</div>
                <p className="text-white/80 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
