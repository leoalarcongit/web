"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Play } from "lucide-react"

const PortfolioPreview = () => {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState({
    src: "",
    alt: "",
    category: "",
  })

  const openLightbox = (image: { src: string; alt: string; category: string }) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const photos = [
    {
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Retrato artístico en blanco y negro",
      category: "retratos",
    },
    {
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Paisaje al atardecer",
      category: "paisajes",
    },
    {
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Fotografía de boda",
      category: "bodas",
    },
    {
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Retrato corporativo",
      category: "retratos",
    },
    {
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Paisaje montañoso",
      category: "paisajes",
    },
    {
      src: "/placeholder.svg?height=800&width=1200",
      alt: "Momento especial de boda",
      category: "bodas",
    },
  ]

  const videos = [
    {
      thumbnail: "/placeholder.svg?height=800&width=1200",
      title: "Reel Cinematográfico 2023",
      videoId: "dQw4w9WgXcQ",
    },
    {
      thumbnail: "/placeholder.svg?height=800&width=1200",
      title: "Documental - Naturaleza Salvaje",
      videoId: "dQw4w9WgXcQ",
    },
    {
      thumbnail: "/placeholder.svg?height=800&width=1200",
      title: "Campaña Publicitaria - Marca Premium",
      videoId: "dQw4w9WgXcQ",
    },
  ]

  return (
    <section id="portfolio-preview" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mi Portafolio</h2>
          <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">
            Una selección de mis mejores trabajos en fotografía y videografía. Cada imagen y video cuenta una historia
            única.
          </p>
        </div>

        <Tabs defaultValue="fotografia" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="fotografia">Fotografía</TabsTrigger>
            <TabsTrigger value="videografia">Videografía</TabsTrigger>
          </TabsList>

          <TabsContent value="fotografia">
            <div className="gallery-grid">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-md cursor-pointer group"
                  onClick={() => openLightbox(photo)}
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover image-hover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm font-medium uppercase tracking-wider">Ver Imagen</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videografia">
            <div className="gallery-grid">
              {videos.map((video, index) => (
                <div key={index} className="relative aspect-[16/9] overflow-hidden rounded-md group">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    fill
                    className="object-cover image-hover"
                  />
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-white/30 transition-all duration-300">
                        <Play className="h-6 w-6 text-white fill-white" />
                      </div>
                      <span className="text-white text-sm font-medium">{video.title}</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/portfolio">Ver Portafolio Completo</Link>
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/90 border-gray-800">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
          </div>
          <div className="p-4">
            <p className="text-white/90">{selectedImage.alt}</p>
            <p className="text-white/60 text-sm capitalize">{selectedImage.category}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default PortfolioPreview
