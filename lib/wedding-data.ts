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

// Generar datos basados en las imágenes subidas a Cloudinary
const generateCeremoniaMoments = (): WeddingMoment[] => {
  const moments: WeddingMoment[] = [];
  for (let i = 1; i <= 100; i++) {
    const num = i.toString().padStart(3, '0');
    moments.push({
      id: `ceremonia-${i}`,
      title: `Ceremonia Civil ${i}`,
      category: 'ceremonia',
      type: 'image',
      cloudinaryId: `wedding/ceremonia/VandA-${num}`,
      description: `Momento especial de la ceremonia civil`,
      featured: i <= 5, // Primeras 5 como destacadas
    });
  }
  return moments;
};

const generateFiestaMoments = (): WeddingMoment[] => {
  const moments: WeddingMoment[] = [];
  const fiestaNumbers = [
    16, 322, 372, 375, 376, 377, 378, 379, 380, 382, 383, 384, 385, 386, 387, 388, 389, 390,
    391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408,
    409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426,
    427, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 440, 441, 442, 443, 444, 445, 446,
    447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464,
    465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482,
    483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 500, 508, 509
  ];

  fiestaNumbers.forEach((num, index) => {
    // Format number with leading zeros to match the actual file names
    const formattedNum = num.toString().padStart(3, '0');
    moments.push({
      id: `fiesta-${num}`,
      title: `Fiesta ${index + 1}`,
      category: 'fiesta',
      type: 'image',
      cloudinaryId: `wedding/fiesta/VandA-${formattedNum}`,
      description: `Momento divertido de la fiesta`,
      featured: index < 5, // Primeras 5 como destacadas
    });
  });

  return moments;
};

export const weddingMoments: WeddingMoment[] = [
  ...generateCeremoniaMoments(),
  ...generateFiestaMoments(),
];

export const coupleInfo = {
  bride: {
    name: 'Valentina',
    photo: 'wedding/ceremonia/VandA-001', // Usar imagen de Cloudinary
  },
  groom: {
    name: 'Andrés',
    photo: 'wedding/ceremonia/VandA-002', // Usar imagen de Cloudinary
  },
  weddingDate: '2024-06-15',
  venue: 'Jardín de los Sueños',
  story: 'Nuestra historia de amor comenzó hace 5 años cuando nos conocimos en la universidad. Desde ese primer encuentro, supimos que habíamos encontrado algo especial.',
};


