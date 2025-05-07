"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      alt: "Fotografía artística de paisaje",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      alt: "Retrato profesional en estudio",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      alt: "Escena de videografía",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-preview")
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=120&width=300"
              alt="Logo"
              width={300}
              height={120}
              className="mx-auto"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-light mb-6">
            Capturando momentos, <span className="font-bold">creando historias</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Fotografía y videografía profesional para preservar tus momentos más importantes con un estilo único y
            atemporal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
              <a href="/portfolio">Ver Portafolio</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:border-white" asChild>
              <a href="/contact">Contactar</a>
            </Button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToPortfolio}
            aria-label="Desplazarse hacia abajo"
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2 text-white/80">Descubrir</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
