export interface WeddingMoment {
  id: string;
  title: string;
  category: 'ceremonia' | 'recepcion' | 'fiesta' | 'novios' | 'preparativos' | 'familia';
  type: 'image' | 'video';
  cloudinaryId: string;
  description?: string;
  timestamp?: string;
  featured?: boolean;
}

export const weddingCategories = [
  { id: 'all', name: 'Todos los Momentos', icon: '💕' },
  { id: 'preparativos', name: 'Preparativos', icon: '✨' },
  { id: 'ceremonia', name: 'Ceremonia', icon: '💒' },
  { id: 'recepcion', name: 'Recepción', icon: '🥂' },
  { id: 'fiesta', name: 'Fiesta', icon: '💃' },
  { id: 'novios', name: 'Los Novios', icon: '👰‍♀️🤵‍♂️' },
  { id: 'familia', name: 'Familia & Amigos', icon: '👨‍👩‍👧‍👦' },
];

// Datos de ejemplo - reemplazar con datos reales
export const weddingMoments: WeddingMoment[] = [
  {
    id: '1',
    title: 'Preparativos de la novia',
    category: 'preparativos',
    type: 'image',
    cloudinaryId: 'wedding/preparativos/novia-1',
    description: 'Los últimos detalles antes del gran momento',
    featured: true,
  },
  {
    id: '2',
    title: 'Intercambio de votos',
    category: 'ceremonia',
    type: 'image',
    cloudinaryId: 'wedding/ceremonia/votos-1',
    description: 'El momento más emotivo del día',
    featured: true,
  },
  {
    id: '3',
    title: 'Primer baile',
    category: 'recepcion',
    type: 'video',
    cloudinaryId: 'wedding/recepcion/primer-baile',
    description: 'Nuestro primer baile como esposos',
    featured: true,
  },
  // Agregar más momentos aquí...
];

export const coupleInfo = {
  bride: {
    name: 'María',
    photo: 'wedding/novios/maria',
  },
  groom: {
    name: 'Juan',
    photo: 'wedding/novios/juan',
  },
  weddingDate: '2024-06-15',
  venue: 'Jardín de los Sueños',
  story: 'Nuestra historia de amor comenzó hace 5 años...',
};
