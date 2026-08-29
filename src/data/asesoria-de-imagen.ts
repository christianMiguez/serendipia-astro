export const asesoriaDeImagen = {
  href: '/asesoria-de-imagen',

  whatsappHref:
    'https://wa.me/59899419419?text=Hola%2C+quisiera+m%C3%A1s+info+del+Taller+Forma+de+Rostro+%26+Accesorios+en+Espacio+Serendipia.%C2%BFMe+podr%C3%ADan+brindar+m%C3%A1s+informaci%C3%B3n%3F&utm_source=serendipia.uy',

  mailchimp: {
    u: 'd8e9fa69f115dd80f19ef36e0',
    id: 'b574becbb8',
    fId: '007faee6f0',
    tags: 3022065,
    title: 'QUIERO ASISTIR',
    buttonText: 'QUIERO ASISTIR',
    description: 'Cupos limitados · Te escribimos para confirmar tu lugar.',
    keepBadge: true,
  },

  metadata: {
    title: 'Taller Forma de Rostro & Accesorios | Asesoría de Imagen en Montevideo',
    description:
      'El 12 de septiembre, taller de Asesoría de Imagen con Ale Lozano en Espacio Serendipia, Montevideo. Descubrí qué formas y accesorios potencian tus rasgos. ¡Cupos limitados!',
    canonical: 'https://serendipia.uy/asesoria-de-imagen',
    robots: { index: true, follow: true },
  },

  hero: {
    tagline: 'Asesoría de Imagen · Taller',
    title: 'Forma de Rostro & Accesorios',
    hook: 'Hay accesorios que simplemente te gustan. Y hay otros que parecen hechos para vos.',
    subtitle:
      'Una tarde para descubrir qué formas, proporciones y accesorios tienen el poder de potenciar tus rasgos y acompañar tu personalidad.',
    image: '/imagen.webp',

    imageAlt: 'Joyería de oro y accesorios para el pelo sobre una superficie de madera',
  },

  evento: [
      { title: 'Fecha', value: '12 de septiembre', icon: 'tabler:calendar-event' },
      { title: 'Horario', value: '16:00 hs', icon: 'tabler:clock' },
      { title: 'Lugar', value: 'Barcelona 1881, Montevideo', icon: 'tabler:map-pin' },
    ],

  descubrir: {
    title: 'Qué vas a descubrir',
    items: [
      {
        title: 'Forma de rostro',
        description: 'Reconocer tu rostro y qué líneas lo favorecen.',
        icon: 'tabler:face-id',
      },
      { title: 'Proporciones', description: 'Cómo los accesorios modifican tus proporciones.', icon: 'tabler:ruler-2' },
      { title: 'Accesorios', description: 'Probar collares, aros y pañuelos sobre vos.', icon: 'tabler:diamond' },
      { title: 'Personalidad', description: 'Conectar las elecciones con tu estilo.', icon: 'tabler:sparkles' },
    ],
  },

  tallerera: {
    name: 'Ale Lozano',
    handle: 'ale.lozano17',
    instagram: 'https://instagram.com/ale.lozano17',
    rol: 'Asesora de Imagen',
    foto: '/ale.webp',
    fotoAlt: 'Ale Lozano, Asesora de Imagen',
    bio: 'Asesora de Imagen que te acompaña a encontrar tu estilo desde el autoconocimiento, combinando técnica y sensibilidad.',
  },

  ciclo: {
    title: 'El ciclo de Asesoría de Imagen',
    items: [
      {
        title: 'Forma de Rostro & Accesorios',
        status: 'Disponible · 12 de septiembre',
        available: true,
        icon: 'tabler:face-id',
      },
      { title: 'Colorimetría', status: 'Próximamente', available: false, icon: 'tabler:palette' },
      { title: 'Fondo de Armario', status: 'Próximamente', available: false, icon: 'tabler:shirt' },
    ],
  },

  faqs: {
    title: 'Preguntas frecuentes',
    items: [
      {
        title: '¿Necesito experiencia previa?',
        description:
          'No. El taller es para cualquier persona que quiera descubrir y probar, sin conocimientos previos.',
      },
      {
        title: '¿Qué llevo?',
        description: 'Solo tus ganas de probarte. Los accesorios para la experiencia los seleccionamos nosotras.',
      },
      {
        title: '¿Cómo reservo mi lugar?',
        description: 'Completando el formulario. Te escribimos para confirmar tu cupo, que es limitado.',
      },
    ],
  },
} satisfies Record<string, unknown>;

export type AsesoriaDeImagen = typeof asesoriaDeImagen;
