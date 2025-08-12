import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Linkedin, Mail, Phone, Send } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/">
              <div className="relative h-10 w-32 mb-4">
                <Image src="/logo_redondo.webp?height=40&width=128" alt="Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-6">
              Fotografía y videografía profesional con un enfoque artístico y atemporal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/leoalarcon.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} /> 
              </a>
              <a
                href="https://www.youtube.com/@leoalarconcl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/leoalarconcl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-white transition-colors text-sm">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-white transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#photography" className="text-white/60 hover:text-white transition-colors text-sm">
                  Fotografía
                </Link>
              </li>
              <li>
                <Link href="/services#videography" className="text-white/60 hover:text-white transition-colors text-sm">
                  Videografía
                </Link>
              </li>
              <li>
                <Link href="/services#editing" className="text-white/60 hover:text-white transition-colors text-sm">
                  Edición
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-white/60 hover:text-white transition-colors text-sm">
                  Comercial
                </Link>
              </li>
              <li>
                <Link href="/services#events" className="text-white/60 hover:text-white transition-colors text-sm">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={16} className="text-white/60 mr-2" />
                <a href="mailto:leonardo.alarcon@gmail.cl" className="text-white/60 hover:text-white transition-colors text-sm">
                  leonardo.alarcon@gmail.cl
                </a>
              </li>
              <li className="flex items-center">
                <Send size={16} className="text-white/60 mr-2" />
                <a href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
                  Escríbeme
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Leonardo Alarcón. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors text-sm">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors text-sm">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
