import proyectoMueble from "../assets/proyects/proyectoMueble.webp";
import distrisur from "../assets/proyects/distrisur.webp";
import fotonube from "../assets/proyects/fotonube.webp";
import gasCabre from "../assets/proyects/gasCabre.webp";
import teza from "../assets/proyects/teza.webp";
import tattoo from "../assets/proyects/tattoo.webp";
import segimed from "../assets/proyects/segimed.webp";
import truco from "../assets/proyects/truco.webp";
import iaYosef from "../assets/proyects/iaYosef.webp";

export const projectsData = [
  {
    id: 1,
    name: "Yosef AI Agent",
    description:
      "Agente de IA avanzado integrado con WhatsApp y Chatwoot para automatizar la atención al cliente y gestión de leads.",
    image: iaYosef,
    type: "AI",
    whatsapp:
      "https://wa.me/5491170628886?text=Hola,%20quisiera%20probar%20el%20agente%20Yosef",
    tags: ["AI", "WhatsApp", "Chatwoot", "Nest.js"],
  },
  {
    id: 4,
    name: "Proyecto Mueble - Youtuber",
    description:
      "Sitio web oficial para una comunidad de carpintería y diseño de muebles.",
    image: proyectoMueble,
    type: "Web",
    url_deploy: "https://proyectomueble.com.ar",
    tags: ["Next.js", "Tailwind", "Paypal"],
  },
  {
    id: 5,
    name: "Anotador de Truco - Tantus",
    description:
      "Aplicación móvil para llevar el puntaje en partidos de Truco, disponible en Play Store.",
    image: truco,
    type: "Mobile",
    url_deploy:
      "https://play.google.com/store/apps/details?id=com.majomon.RNTantusAnotadorTruco",
    tags: ["React Native", "Expo", "Mobile"],
  },
  {
    id: 6,
    name: "Segimed - Historial Médico",
    description:
      "Plataforma móvil para la gestión de historiales médicos y turnos.",
    image: segimed,
    type: "Mobile",
    tags: ["React Native", "HealthTech"],
  },
  {
    id: 7,
    name: "Distribuidora Mayorista",
    description:
      "E-commerce B2B con gestión de stock y pedidos en tiempo real.",
    image: distrisur,
    type: "Web",
    url_deploy: "https://nextjs-distri-sur.vercel.app",
    tags: ["Next.js", "Postgres", "Tailwind"],
  },
  {
    id: 8,
    name: "Fotonube",
    description:
      "Marketplace moderno para fotógrafos y venta de contenido digital.",
    image: fotonube,
    type: "Web",
    url_deploy: "https://fotonube.com",
    tags: ["React", "Firebase", "Stripe"],
  },
  {
    id: 9,
    name: "Gascabre - Tatuador",
    description:
      "Sitio web personal y portfolio para un artista del tatuaje, con galería dinámica.",
    image: gasCabre,
    type: "Web",
    url_deploy: "https://www.gascabre.com",
    tags: ["React", "Portfolio", "Design"],
  },
  {
    id: 10,
    name: "E-commerce de Moda - Teza",
    description:
      "Tienda online de calzado y moda con integración de pagos y catálogo gestionable.",
    image: teza,
    type: "Web",
    url_deploy: "https://teza-shoes.vercel.app",
    tags: ["Next.js", "E-commerce", "Stripe"],
  },
  {
    id: 11,
    name: "Tattoo Studio Landing",
    description:
      "Landing page de alto impacto para estudios de tatuajes con reservas online.",
    image: tattoo,
    type: "Web",
    url_deploy: "https://next-landing-tattoo.vercel.app",
    tags: ["Next.js", "Landing Page", "Performance"],
  },
];
