'use client';

import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Heart } from 'lucide-react';
import { coupleInfo } from '@/lib/wedding-data';

const heroSlides = [
  {
    id: 1,
    cloudinaryId: 'wedding/ceremonia/VandA-001',
    alt: 'Momento especial de la boda 1',
  },
  {
    id: 2,
    cloudinaryId: 'wedding/ceremonia/VandA-010', 
    alt: 'Momento especial de la boda 2',
  },
  {
    id: 3,
    cloudinaryId: 'wedding/fiesta/VandA-380',
    alt: 'Momento especial de la boda 3',
  },
];

export default function WeddingHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToGallery = () => {
    const gallerySection = document.querySelector('section');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <CldImage
            src={slide.cloudinaryId}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            quality="auto"
            format="auto"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge de celebración */}
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              <Heart className="w-5 h-5 mr-2 fill-current" />
              ¡Nos Casamos!
            </Badge>
          </div>

          {/* Nombres de los novios */}
          <h1 className="text-4xl md:text-7xl font-light mb-6">
            <span className="font-bold">{coupleInfo.bride.name}</span>
            <span className="mx-4 text-red-400">♥</span>
            <span className="font-bold">{coupleInfo.groom.name}</span>
          </h1>

          {/* Información del evento */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">{formatDate(coupleInfo.weddingDate)}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{coupleInfo.venue}</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Gracias por acompañarnos en el día más especial de nuestras vidas. 
            Aquí encontrarás todos los momentos mágicos que vivimos juntos.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-3 font-medium"
              onClick={scrollToGallery}
            >
              Ver Galería Completa
            </Button>
            <Button 
              size="lg" 
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-3 font-medium backdrop-blur-sm"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            >
              Descargar Fotos
            </Button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Indicadores de slides */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


