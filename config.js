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
      description: "Landing pages a $400.000 COP y páginas web completas desde $700.000 COP. Responsive y optimizadas.",
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
    title: "2 Landing Pages Personalizadas",
    oldPrice: "$800.000",
    price: "$300.000",
    currency: "COP",
    note: "Landing individual $400.000 · Web completa desde $700.000 COP",
    timerLabel: "Oferta por tiempo limitado · dos landing pages",
    features: [
      "2 landing pages personalizadas (valor $800.000)",
      "Diseño moderno y personalizado",
      "100% responsive (móvil, tablet, PC)",
      "Formulario de contacto o botón WhatsApp",
      "Sección de servicios, galería o portafolio",
      "Optimización SEO básica",
      "Entrega en 5–7 días hábiles",
      "1 revisión de ajustes incluida",
    ],
    ctaLabel: "Quiero las 2 Landing Pages",
  },

  /* ── Proyectos (masonry) ─────────────────────────────────
     `aspect` controla la proporción de la imagen:
     "4/3", "3/4", "16/10", "1/1", etc.                      */
  projects: [
    {
      number: "01",
      title: "Salupi Crochet",
      description: "Tienda online con catálogo visual, carrito y pasarela de pago.",
      image: "project-placeholder.svg",
      tags: ["E-commerce", "Mobile-First"],
      link: "https://salupicrochet.com",
      linkLabel: "Ver sitio",
      aspect: "4/3",
    },
    {
      number: "02",
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
  ],
};
