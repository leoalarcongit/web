'use client';

import { useState } from 'react';
import Image from 'next/image';
import { weddingCategories, weddingMoments, type WeddingMoment } from '@/lib/wedding-data-local';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Download, Share2, Heart, Loader2 } from 'lucide-react';

export default function WeddingGalleryLocal() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedMoment, setSelectedMoment] = useState<WeddingMoment | null>(null);
  const [visibleCount, setVisibleCount] = useState(50);
  const [isLoading, setIsLoading] = useState(false);

  const filteredMoments = activeCategory === 'all' 
    ? weddingMoments 
    : weddingMoments.filter(moment => moment.category === activeCategory);

  const visibleMoments = filteredMoments.slice(0, visibleCount);
  const remainingCount = filteredMoments.length - visibleCount;

  const handleLoadMore = async () => {
    setIsLoading(true);
    const currentHeight = document.documentElement.scrollHeight;
    
    // Simular un pequeño delay para mejor UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setVisibleCount(prev => Math.min(prev + 50, filteredMoments.length));
    
    // Scroll suave a las nuevas fotos después de que se carguen
    setTimeout(() => {
      const newHeight = document.documentElement.scrollHeight;
      const scrollTarget = currentHeight - 200; // Un poco antes de las nuevas fotos
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }, 100);
    
    setIsLoading(false);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setVisibleCount(50); // Reset visible count when changing category
  };

  const handleShowAll = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setVisibleCount(filteredMoments.length);
    setIsLoading(false);
  };

  const handleDownload = (moment: WeddingMoment) => {
    // Crear un enlace temporal para descargar
    const link = document.createElement('a');
    link.href = moment.localPath;
    link.download = `${moment.title}.webp`;
    link.click();
  };

  const handleShare = async (moment: WeddingMoment) => {
    if (navigator.share) {
      await navigator.share({
        title: moment.title,
        text: moment.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="space-y-8">
      {/* Filtros de categorías */}
      <div className="flex flex-wrap gap-3 justify-center">
        {weddingCategories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => handleCategoryChange(category.id)}
            className="flex items-center gap-2"
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </Button>
        ))}
      </div>

      {/* Contador de momentos */}
      <div className="text-center">
        <p className="text-muted-foreground">
          Mostrando {visibleMoments.length} de {filteredMoments.length} momentos especiales
        </p>
      </div>

      {/* Galería de momentos */}
      <div className="gallery-grid">
        {visibleMoments.map((moment) => (
          <Card key={moment.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative cursor-pointer">
                    <Image
                      src={moment.localPath}
                      alt={moment.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Overlay con información */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {moment.title}
                        </h3>
                        {moment.description && (
                          <p className="text-white/80 text-sm">
                            {moment.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Badge de categoría */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        {weddingCategories.find(cat => cat.id === moment.category)?.icon}{' '}
                        {weddingCategories.find(cat => cat.id === moment.category)?.name}
                      </Badge>
                    </div>

                    {/* Badge de destacado */}
                    {moment.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-red-500 text-white">
                          <Heart className="w-3 h-3 mr-1 fill-current" />
                          Destacado
                        </Badge>
                      </div>
                    )}
                  </div>
                </DialogTrigger>

                {/* Modal de visualización completa */}
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                  <div className="space-y-4">
                    <Image
                      src={moment.localPath}
                      alt={moment.title}
                      width={800}
                      height={600}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">{moment.title}</h2>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleShare(moment)}
                          >
                            <Share2 className="w-4 h-4 mr-2" />
                            Compartir
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleDownload(moment)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Descargar
                          </Button>
                        </div>
                      </div>
                      
                      {moment.description && (
                        <p className="text-muted-foreground">{moment.description}</p>
                      )}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mensaje si no hay momentos */}
      {filteredMoments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No hay momentos en esta categoría aún.
          </p>
        </div>
      )}

      {/* Mostrar más botón */}
      {remainingCount > 0 && (
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleLoadMore}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Cargando...
              </>
            ) : (
              <>Ver más fotos ({remainingCount} restantes)</>
            )}
          </Button>
        </div>
      )}

      {/* Botón para mostrar todas */}
      {remainingCount > 50 && !isLoading && (
        <div className="text-center mt-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleShowAll}
            className="text-muted-foreground hover:text-foreground"
          >
            Mostrar todas las fotos ({filteredMoments.length} total)
          </Button>
        </div>
      )}

      {/* Indicador de carga global */}
      {isLoading && (
        <div className="text-center py-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Cargando más momentos especiales...</span>
          </div>
        </div>
      )}
    </div>
  );
}
