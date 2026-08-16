export type FloresCard = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  href: string;
};

export type FreqItem = { title: string; description?: string; icon?: string };

export const floresDeBach = {
  href: '/flores-de-bach',

  whatsappHref:
    'https://wa.me/59899419419?text=Hola%2C+quisiera+reservar+una+sesi%C3%B3n+de+Flores+de+Bach+en+Espacio+Serendipia.%C2%BFMe+podr%C3%ADan+brindar+m%C3%A1s+informaci%C3%B3n%3F&utm_source=serendipia.uy',

  metadata: {
    title: 'Flores de Bach en el Cerro de Montevideo | Terapia Floral',
    description:
      'Descubrí la terapia con Flores de Bach en el Cerro de Montevideo. Un acompañamiento natural orientado al bienestar emocional, el autoconocimiento y el equilibrio personal.',
    canonical: 'https://serendipia.uy/flores-de-bach',
    robots: { index: true, follow: true },
  },

  card: {
    title: 'Flores de Bach en el Cerro de Montevideo',
    excerpt:
      'Descubrí la terapia con Flores de Bach en el Cerro de Montevideo. Un acompañamiento natural orientado al bienestar emocional, el autoconocimiento y el equilibrio personal.',
    image: '/bach.jpg',
    category: 'Terapia Floral',
    href: '/flores-de-bach',
  },

  hero: {
    tagline: 'Terapia floral',
    title: 'Flores de Bach en el Cerro de Montevideo',
    subtitle:
      'Un acompañamiento natural orientado al bienestar emocional, el autoconocimiento y el equilibrio personal.',
    image: '/bach.jpg',
    imageAlt: 'Flores suaves color pastel en un campo luminoso',
  },

  intro: {
    title: '¿Qué son las Flores de Bach?',
    paragraphs: [
      'Las emociones forman parte de nuestra vida. En algunos momentos podemos sentir ansiedad, miedo, estrés, incertidumbre o atravesar cambios que afectan nuestro bienestar.',
      'La <strong>terapia con Flores de Bach</strong> es una práctica complementaria que muchas personas eligen para acompañar estos procesos desde una mirada integral. En <strong>Espacio Serendipia</strong>, en el <strong>Cerro de Montevideo</strong>, ofrecemos sesiones personalizadas donde cada persona recibe un acompañamiento respetuoso, centrado en sus necesidades y su momento de vida.',
    ],
  },

  drBach: {
    title: 'El origen del método',
    paragraphs: [
      'Las Flores de Bach son un sistema de esencias florales desarrollado por el médico inglés <strong>Edward Bach</strong> durante la década de 1930.',
      'Esta práctica parte de la idea de que el equilibrio emocional es un aspecto importante del bienestar general. Durante la consulta se realiza una entrevista para conocer cómo se siente la persona y seleccionar las esencias florales que mejor acompañen su proceso.',
      'Las Flores de Bach forman parte de las terapias complementarias y no sustituyen la atención médica o psicológica cuando esta es necesaria.',
    ],
  },

  situaciones: {
    title: '¿En qué situaciones pueden acompañarte?',
    lead: 'Muchas personas consultan cuando atraviesan momentos como:',
    items: [
      { title: 'Estrés', icon: 'tabler:wind' },
      { title: 'Ansiedad', icon: 'tabler:cloud' },
      { title: 'Miedos', icon: 'tabler:eye-off' },
      { title: 'Inseguridad', icon: 'tabler:shield-question' },
      { title: 'Cambios importantes', icon: 'tabler:arrows-shuffle' },
      { title: 'Procesos de duelo', icon: 'tabler:heart-broken' },
      { title: 'Baja autoestima', icon: 'tabler:mood-sad' },
      { title: 'Dificultades emocionales', icon: 'tabler:mood-empty' },
      { title: 'Cansancio emocional', icon: 'tabler:battery-2' },
      { title: 'Crecimiento personal', icon: 'tabler:sparkles' },
    ],
    footnote: 'Cada consulta es personalizada y busca acompañar el momento particular de quien asiste.',
  },

  consulta: {
    title: '¿Cómo es una consulta?',
    lead: 'La primera sesión comienza con una conversación donde podrás compartir aquello que estás viviendo. A partir de esa entrevista, el terapeuta selecciona una combinación de esencias florales adaptada a tus necesidades. Además del preparado floral, la consulta ofrece un espacio de escucha y reflexión sobre el proceso personal que estás atravesando.',
    steps: [
      {
        title: 'Conversación inicial',
        description: 'Compartís aquello que estás viviendo en un espacio de escucha respetuosa y sin juicios.',
        icon: 'tabler:messages',
      },
      {
        title: 'Selección de esencias',
        description: 'A partir de la entrevista, el terapeuta elige las flores que mejor acompañen tu proceso.',
        icon: 'tabler:flower',
      },
      {
        title: 'Preparado floral',
        description: 'Te llevás una combinación personalizada de esencias florales adaptada a tu momento.',
        icon: 'tabler:droplet',
      },
      {
        title: 'Espacio de escucha',
        description: 'La consulta incluye un espacio de reflexión sobre el proceso personal que estás transitando.',
        icon: 'tabler:ear',
      },
    ],
  },

  beneficios: {
    title: 'Beneficios que muchas personas encuentran',
    lead: 'Cada experiencia es diferente, pero quienes utilizan Flores de Bach suelen expresar que les ayudan a:',
    items: [
      {
        title: 'Conectar con tus emociones',
        description: 'Reconocer y habitar lo que sentís sin forzar ni juzgar.',
        icon: 'tabler:heart',
      },
      {
        title: 'Transitar cambios personales',
        description: 'Acompañar etapas de transformación con más calma.',
        icon: 'tabler:arrows-shuffle',
      },
      {
        title: 'Favorecer la calma',
        description: 'Contribuir a una sensación de tranquilidad y equilibrio.',
        icon: 'tabler:moon-stars',
      },
      {
        title: 'Desarrollar autoconocimiento',
        description: 'Sumar recursos para conocerte mejor a lo largo del tiempo.',
        icon: 'tabler:eye',
      },
      {
        title: 'Fortalecer recursos emocionales',
        description: 'Ampliar tu caja de herramientas para lo cotidiano.',
        icon: 'tabler:tool',
      },
      {
        title: 'Recuperar el equilibrio',
        description: 'Volver a una sensación de-centro y bienestar general.',
        icon: 'tabler:yin-yang',
      },
    ],
    footnote:
      'Los resultados pueden variar según cada persona y las Flores de Bach no sustituyen tratamientos médicos o psicológicos indicados por profesionales de la salud.',
  },

  ubicacion: {
    title: '¿Dónde estamos?',
    lines: ['Espacio Serendipia', 'Barcelona 1881', 'Cerro de Montevideo'],
    paragraph:
      'Recibimos personas del Cerro, Casabó, La Teja, Belvedere, Paso de la Arena y otras zonas de Montevideo.',
  },

  faqs: {
    title: 'Preguntas frecuentes',
    items: [
      {
        title: '¿Las Flores de Bach son un medicamento?',
        description:
          'No. Son una terapia complementaria y no reemplazan tratamientos médicos ni psicológicos cuando estos son necesarios.',
      },
      {
        title: '¿Necesito tener experiencia previa?',
        description:
          'No. Cualquier persona puede realizar una consulta. No es necesario conocer previamente las Flores de Bach.',
      },
      {
        title: '¿La consulta es personalizada?',
        description:
          'Sí. Cada preparado floral se selecciona teniendo en cuenta el momento y las necesidades particulares de cada persona.',
      },
      {
        title: '¿Puedo combinar las Flores de Bach con otros tratamientos?',
        description:
          'En muchos casos sí. Si estás realizando un tratamiento médico o psicológico, es recomendable informar a los profesionales que te acompañan.',
      },
      {
        title: '¿Cómo puedo reservar una consulta?',
        description:
          'Podés comunicarte con nosotros por WhatsApp o completar el formulario de contacto para coordinar una sesión.',
      },
    ],
  },

  cta: {
    title: 'Regalate un espacio para escuchar tus emociones',
    subtitle:
      'Si estás buscando Flores de Bach en el Cerro de Montevideo, en Espacio Serendipia encontrarás un espacio cálido y respetuoso donde recibir un acompañamiento personalizado para tu bienestar emocional. Te esperamos para acompañarte en este camino de autoconocimiento y equilibrio.',
    primary: { text: 'HABLAR POR WHATSAPP', variant: 'primary' as const, icon: 'tabler:arrow-right' },
    secondary: { text: 'Ver área holística', variant: 'tertiary' as const, href: '/servicios/area-holistica' },
  },
} satisfies Record<string, unknown>;

export type FloresDeBach = typeof floresDeBach;
