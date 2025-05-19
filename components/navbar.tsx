"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="z-50">
          <div className="relative h-10 w-32">
            <Image src="/logo_redondo.webp?height=40&width=128" alt="Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/portfolio"
            className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Portafolio
          </Link>
          <Link
            href="/services"
            className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Servicios
          </Link>
          <Link
            href="/about"
            className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
          >
            Sobre mí
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-white/20 hover:border-white text-sm uppercase tracking-wider">
              Contacto
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-black flex flex-col justify-center items-center transition-all duration-300 md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible",
          )}
        >
          <nav className="flex flex-col items-center space-y-8">
            <Link
              href="/portfolio"
              className="text-white/80 hover:text-white transition-colors text-xl uppercase tracking-wider"
              onClick={closeMenu}
            >
              Portafolio
            </Link>
            <Link
              href="/services"
              className="text-white/80 hover:text-white transition-colors text-xl uppercase tracking-wider"
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition-colors text-xl uppercase tracking-wider"
              onClick={closeMenu}
            >
              Sobre mí
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <Button variant="outline" className="border-white/20 hover:border-white text-xl uppercase tracking-wider">
                Contacto
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
