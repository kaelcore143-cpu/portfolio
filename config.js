/* ============================================================
   KAEL CORE® — CONFIGURACIÓN DEL SITIO
   ------------------------------------------------------------
   ✏️  EDITA AQUÍ TODO EL CONTENIDO:
   · Oferta / precio  →  objeto `offer`
   · Servicios         →  array  `services`
   · Proyectos         →  array  `projects`
   · Testimonios       →  array  `testimonials`
   · Stats             →  array  `stats`
   · Contacto          →  objeto `contact`
   No es necesario tocar el HTML ni el JS.
   ============================================================ */

const CONFIG = {

  /* ── Marca ─────────────────────────────────────────────── */
  brand: {
    name: "Kael Core",
    symbol: "≠",            // símbolo principal de marca
    registered: "®",
    role: "Digital Independent Creator",
    kicker: "(001) — Desarrollo de videojuegos & webs",
    tagline: "NOT EQUAL.",
    description: "Desarrollo videojuegos web con GDevelop y páginas web modernas. Proyectos indie, creatividad y código rápido.",
    // Manifiesto (sección split diagonal)
    manifestoTitle: "Crear sin fórmulas.",
    manifesto: "No sigo tendencias por obligación. Construyo experiencias digitales con identidad propia: diseño, tecnología y experimentación al servicio de ideas que no se parecen a nadie.",
    principles: [
      "Originalidad sobre lo convencional",
      "Creatividad + tecnología",
      "Experimentación constante",
      "Soluciones con identidad propia",
    ],
  },

  /* ── Navegación ────────────────────────────────────────── */
  nav: [
    { label: "Servicios",   href: "#services" },
    { label: "Proyectos",   href: "#projects" },
    { label: "Oferta",      href: "#offer" },
    { label: "Testimonios", href: "#testimonials" },
  ],

  /* ── Contacto ──────────────────────────────────────────── */
  contact: {
    whatsapp: "573012787784",
    whatsappText: "Hola, quiero información sobre un proyecto.",
    instagram: "https://www.instagram.com/kaelcore143/",
  },

  /* ── Stats ─────────────────────────────────────────────── */
  stats: [
    { value: "9+",   label: "Proyectos completados" },
    { value: "4+",   label: "Videojuegos publicados" },
    { value: "5+",   label: "Sitios web en producción" },
    { value: "100%", label: "Autodidacta" },
  ],

  /* ── Cinta (marquee) ───────────────────────────────────── */
  marquee: [
    "NOT EQUAL", "THINK DIFFERENTLY", "CREATE WITHOUT LIMITS", "BEYOND CONVENTION",
  ],

  /* ── Servicios ─────────────────────────────────────────── */
  services: [
    {
      number: "01",
      icon: "fa-gamepad",
      title: "Desarrollo de Videojuegos",
      description: "Juegos 2D web con GDevelop. Game design, mecánicas, UI y publicación en itch.io.",
    },
    {
      number: "02",
      icon: "fa-code",
      title: "Desarrollo Web",
      description: "Landing pages, blogs y sitios empresariales con HTML, CSS y JavaScript. Responsive y optimizados.",
    },
    {
      number: "03",
      icon: "fa-pen-ruler",
      title: "Diseño & UI",
      description: "Pixel art, diseño de interfaces para juegos y diseño web moderno con foco en UX.",
    },
    {
      number: "04",
      icon: "fa-gauge-high",
      title: "SEO & Rendimiento",
      description: "Optimización para motores de búsqueda y velocidad de carga. PageSpeed 95+.",
    },
  ],

  /* ── OFERTA / PRECIO ─────────────────────────────────────
     ✏️  Para cambiar la oferta, edita estas líneas.         */
  offer: {
    badge: "Oferta especial",
    number: "(004)",
    title: "Landing Page Personalizada",
    oldPrice: "$185.000",
    price: "$110.000",
    currency: "COP",
    note: "Pago único · Entrega en 5–7 días hábiles",
    timerLabel: "Precio especial por tiempo limitado",
    features: [
      "Diseño moderno y personalizado",
      "100% responsive (móvil, tablet, PC)",
      "Formulario de contacto o botón WhatsApp",
      "Sección de servicios, galería o portafolio",
      "Optimización SEO básica",
      "Entrega en 5–7 días hábiles",
      "1 revisión de ajustes incluida",
    ],
    ctaLabel: "Quiero mi Landing Page",
  },

  /* ── Proyectos (masonry) ─────────────────────────────────
     `aspect` controla la proporción de la imagen:
     "4/3", "3/4", "16/10", "1/1", etc.                      */
  projects: [
    {
      number: "01",
      title: "Dinoruta",
      description: "Juego de cartas con dinosaurios: escapa, lucha, recolecta gemas.",
      image: "game-dinoruta.png",
      tags: ["GDevelop", "Cartas", "Indie"],
      link: "https://tortu-gas.itch.io/dinoruta",
      linkLabel: "Ver en itch.io",
      aspect: "4/3",
    },
    {
      number: "02",
      title: "Crazy Intense",
      description: "Elimina fantasmas, consume pastillas y logra la máxima puntuación.",
      image: "game-crazy-intense.png",
      tags: ["Arcade", "GDevelop"],
      link: "https://tortu-gas.itch.io/crazy-intense",
      linkLabel: "Ver en itch.io",
      aspect: "3/4",
    },
    {
      number: "03",
      title: "Salupi Crochet",
      description: "Tienda online con catálogo visual, carrito y pasarela de pago.",
      image: "project-placeholder.svg",
      tags: ["E-commerce", "Mobile-First"],
      link: "https://salupicrochet.com",
      linkLabel: "Ver sitio",
      aspect: "4/3",
    },
    {
      number: "04",
      title: "Ruta 71 Motofilms",
      description: "Sitio web para estética vehicular de motos. Servicios, galería y contacto directo por WhatsApp.",
      image: "project-placeholder.svg",
      tags: ["Landing Page", "Motos", "Responsive"],
      link: "https://ruta71motofilms.com",
      linkLabel: "Ver sitio",
      aspect: "3/4",
    },
    {
      number: "05",
      title: "Car Films",
      description: "Landing page para estética vehicular. Servicios, galería de trabajos y contacto por WhatsApp.",
      image: "project-placeholder.svg",
      tags: ["Landing Page", "Autos", "Responsive"],
      link: "https://steticavehicularcarfilms.com",
      linkLabel: "Ver sitio",
      aspect: "4/3",
    },
  ],

  /* ── Testimonios ───────────────────────────────────────── */
  testimonials: [
    {
      quote: "Robert entregó mi landing page en menos de una semana. El diseño superó mis expectativas y mis clientes me preguntan constantemente quién la hizo.",
      author: "Valentina R.",
      role: "Emprendedora · Cali",
    },
    {
      quote: "Contraté el sitio web para mi barbería y quedé encantado. Muy buen precio, rápido y siempre dispuesto a hacer los ajustes que pedí.",
      author: "Andrés M.",
      role: "Barbero · Barranquilla",
    },
    {
      quote: "El juego que desarrolló para nuestra campaña fue increíble. Muy creativo, cumplido con los tiempos y con una calidad increíble para su precio.",
      author: "Camila T.",
      role: "Diseñadora · Medellín",
    },
  ],
};
