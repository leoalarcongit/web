'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Calendar, MapPin, Users } from 'lucide-react';
import { coupleInfo } from '@/lib/wedding-data-local';

export default function CoupleStory() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-500 text-white">
            <Heart className="w-4 h-4 mr-2 fill-current" />
            Nuestra Historia
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Una Historia de Amor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce cómo comenzó nuestra historia y los momentos que nos trajeron hasta aquí
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Historia de texto */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {coupleInfo.story}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desde ese primer encuentro, supimos que habíamos encontrado algo especial. 
                Cada momento juntos nos confirmaba que estábamos destinados a compartir nuestras vidas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoy, rodeados de nuestros seres queridos, celebramos no solo nuestro amor, 
                sino también el comienzo de una nueva aventura como esposos.
              </p>
            </div>

            {/* Datos curiosos */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-background rounded-lg border">
                <Calendar className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Años Juntos</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-red-500" />
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Ciudades Visitadas</div>
              </div>
            </div>
          </div>

          {/* Fotos de la pareja */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/galeria/civil/V&A-005.webp"
                  alt="Foto de la pareja"
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={coupleInfo.bride.photo}
                    alt={coupleInfo.bride.name}
                    width={250}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3 text-center">
                    <h3 className="font-semibold">{coupleInfo.bride.name}</h3>
                    <p className="text-sm text-muted-foreground">La Novia</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={coupleInfo.groom.photo}
                    alt={coupleInfo.groom.name}
                    width={250}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3 text-center">
                    <h3 className="font-semibold">{coupleInfo.groom.name}</h3>
                    <p className="text-sm text-muted-foreground">El Novio</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline de momentos importantes */}
        <div className="border-t pt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Momentos Importantes
          </h3>
          
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200"></div>
            
            <div className="space-y-8">
              {/* Primer encuentro */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-background p-4 rounded-lg border shadow-sm">
                    <h4 className="font-semibold mb-2">Primer Encuentro</h4>
                    <p className="text-sm text-muted-foreground">2019</p>
                    <p className="text-sm">Nos conocimos en la universidad</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-background shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Primera cita */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-background shadow-lg z-10"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-background p-4 rounded-lg border shadow-sm">
                    <h4 className="font-semibold mb-2">Primera Cita</h4>
                    <p className="text-sm text-muted-foreground">2019</p>
                    <p className="text-sm">Cena romántica en el centro</p>
                  </div>
                </div>
              </div>

              {/* Compromiso */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-background p-4 rounded-lg border shadow-sm">
                    <h4 className="font-semibold mb-2">¡Compromiso!</h4>
                    <p className="text-sm text-muted-foreground">2023</p>
                    <p className="text-sm">La propuesta en la playa</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-background shadow-lg z-10"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Boda */}
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="w-6 h-6 bg-red-500 rounded-full border-4 border-background shadow-lg z-10 flex items-center justify-center">
                  <Heart className="w-3 h-3 text-white fill-current" />
                </div>
                <div className="w-1/2 pl-8">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200 shadow-sm">
                    <h4 className="font-semibold mb-2 text-red-700">¡Nuestra Boda!</h4>
                    <p className="text-sm text-red-600">2024</p>
                    <p className="text-sm text-red-700">El día más especial de nuestras vidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
