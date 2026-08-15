import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/nosotros'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Salud Mental',
          href: getPermalink('/servicios/salud-mental'),
        },
        {
          text: 'Área Educativa',
          href: getPermalink('/servicios/area-educativa'),
        },
        {
          text: 'Área Holística',
          href: getPermalink('/servicios/area-holistica'),
        },
      ],
    },
    {
      text: 'Consultorios',
      links: [
        {
          text: 'Ver consultorios',
          href: getPermalink('/consultorios'),
        },
        {
          text: 'Reservar',
          href: 'https://wa.me/59899419419?text=Hola%2C+quisiera+consultar+por+el+alquiler+de+un+consultorio+en+Espacio+Serendipia.+%C2%BFMe+podr%C3%ADan+brindar+m%C3%A1s+informaci%C3%B3n%3F&utm_source=chatgpt.com',
        },
      ],
    },
  ],
  actions: [
    {
      text: 'CONTACTAR',
      variant: 'secondary',
      target: '_blank',
      href: 'https://wa.me/59899419419?text=Me+contacto+desde+la+web%3A+',
      icon: 'tabler:arrow-right',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Psicoterapia', href: getPermalink('/servicios/salud-mental') },
        { text: 'Terapia de Pareja', href: getPermalink('/servicios/salud-mental') },
        { text: 'Talleres y Cursos', href: getPermalink('/servicios/area-educativa') },
        { text: 'Reiki y Terapia Floral', href: getPermalink('/servicios/area-holistica') },
        { text: 'Aromaterapia y Meditación', href: getPermalink('/servicios/area-holistica') },
      ],
    },
    {
      title: 'Consultorios',
      links: [
        { text: 'Alquiler por Hora', href: getPermalink('/consultorios') },
        {
          text: 'Reservar desde la App',
          href: 'https://wa.me/59899419419?text=Hola%2C+quisiera+consultar+por+el+alquiler+de+un+consultorio+en+Espacio+Serendipia.+%C2%BFMe+podr%C3%ADan+brindar+m%C3%A1s+informaci%C3%B3n%3F&utm_source=chatgpt.com',
        },
      ],
    },
    {
      title: 'Espacio Serendipia',
      links: [
        { text: 'Nosotros', href: getPermalink('/nosotros') },
        { text: 'Ubicación (Barrio Cerro, Montevideo)', href: getPermalink('/contacto') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/espacio_serendipia' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Espacio Serendipia · Barrio Cerro, Montevideo · Todos los derechos reservados.
  `,
};
