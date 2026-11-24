# Auditoría SEO / CRO — Kael Core (versión actual)

Auditoría del sitio publicado en `https://kaelcore143.com/` y del código local. **No se cambió la identidad visual**: paleta, tipografías, logo, grano, marquee, composición y animaciones siguen iguales.

## 1. Hallazgos priorizados

### Crítico (corregido)
| # | Problema Evidence | Acción |
|---|---|---|
| C1 | El `h1`, servicios, proyectos y testimonios eran skeletons inyectados por `main.js` 400 ms después. El HTML servido tenía un `h1` vacío. | El HTML contiene ahora el contenido real, con el mismo markup que produce el JS. Funciona sin JS y es indexable. |
| C2 | Bloque `#loadError` (*"Error de carga / No se pudo cargar la configuración del sitio"*) y `<noscript>` con error visible. | Eliminados. Ningún error interno se muestra al visitante; si `config.js` falla, permanece el HTML estático. |
| C3 | No existían `robots.txt` ni `sitemap.xml` (404 confirmados). | Añadidos. |
| C4 | Sin `canonical`, `meta robots` ni JSON-LD. | Añadidos: `WebSite`, `Person` y 4 `Service`. No se inventaron reseñas ni valoraciones. |
| C5 | Enlaces de WhatsApp eran `href="#"` y dependían de JS. | URLs `wa.me` reales y absolutas en el HTML. |
| C6 | Urgencia falsa (*"Oferta por tiempo limitado"*) y plazo no confirmado (*"5–7 días hábiles"*). | `timerLabel` vaciado y oculto por CSS; plazo convertido en placeholder. |
| C7 | Testimonios con nombres y citas no verificables. | Sustituidos por los dos testimonios reales aportados por el dueño: CarFilms (*"Quedo muy bien"*) y Salupi Crochet (*"Gran resultado, aumenté mis ventas"*). |

### Alto (corregido)
| # | Problema | Acción |
|---|---|---|
| A1 | Title genérico (36 caracteres), descripción corta, OG sin `og:url` ni `og:image:alt`, sin Twitter Cards. | Metadatos completos y descriptivos. |
| A2 | Métrica no verificable `PageSpeed 95+` en servicios. | Eliminada; copy neutro. |
| A3 | Imágenes sin `width`/`height` (CLS). | Dimensiones añadidas al logo y a las imágenes de proyectos. |
| A4 | Cuerpo a 15.2 px en móvil. | `--text-base` a `1rem` (16 px). |
| A5 | `aria-busy="true"` permanente en contenedores. | Eliminado del HTML. |
| A6 | Guard de testimonios apuntaba a un ID inexistente (`testimonialsGrid`). | Corregido a `testimonialCarousel`. |
| A7 | Contenido de servicios sin encabezados semánticos en el HTML. | `h3` reales por servicio. |

### Medio / bajo
- [x] CTA fijo en móvil: el botón flotante existente pasa a ser una píldora "Cotizar" de 111×54 px con `env(safe-area-inset-bottom)` y se añadió relleno inferior al footer para no tapar contenido.
- [x] Capturas reales: se capturaron las portadas publicadas de `salupicrochet.com` y `steticavehicularcarfilms.com` con Chrome headless, se guardaron en WebP (~53 KB y ~39 KB) y se usan en el portafolio con `alt` descriptivo y `loading="lazy"`.
- [x] Patrón de fondo: trama diagonal tenue en rgba blanco cálido + halos carmesí/salvia, manteniendo la paleta original.
- [x] Targets táctiles del carrusel ampliados a 44 px (el punto visible sigue siendo de 10 px).
- [x] Efectos visuales discretos: barra de progreso de lectura (2 px carmesí, actualizada con `requestAnimationFrame`), barrido diagonal en hover de servicios y entrada escalonada de tarjetas. El grano y la marquesina siguen como estaban.
- [x] Cubo 3D verde centrado sobre los datos del hero (`ROL / BASE / ESTADO / MODO`): seis caras CSS lisas con `perspective: 620px` (sin retícula ni ecuaciones). Gira de forma isométrica con los tres ejes (`cube-spin`, 9 s lineal infinito) y la sombra se desplaza en sincronía (`cube-shadow`, aplicada al contenedor para no aplanar el 3D). Sin JS ni scroll; en `prefers-reduced-motion` ambas bajan a 18 s. El antiguo símbolo `≠` gigante del hero se eliminó (el `≠` sigue vivo en el tagline, el marquee y el logo del header).
- Pendiente (no solicitado ahora): formulario de contacto, sección de proceso, FAQ, política de privacidad y aviso legal.
- Numeración de secciones inconsistente: `(003)` servicios, `(002)` manifiesto, `(005)` proyectos.

## 2. Qué se conserva de la estética

- Paleta completa: `#111111`, `#E53935`, `#FF5A55`, `#B8F23B`, `#F2F0EA`, `#A6A6A6`, `#303030`.
- Tipografías Space Grotesk / Inter / IBM Plex Mono.
- Logo `logo.png`, símbolo `≠`, mensaje **NOT EQUAL**.
- Estructura de secciones, grano, marquee, diagonales, hover y animaciones.
- El retardo `LOADING_DELAY` y el render desde `config.js` siguen disponibles para edición de contenido.

Únicos cambios visuales perceptibles: el texto aparece desde el primer frame (ya no hay skeleton durante 400 ms) y el reloj de "tiempo limitado" desaparece por ser urgencia falsa.

## 3. Placeholders `[COMPLETAR CON EL DUEÑO]`

| Dato | Dónde | Acción |
|---|---|---|
| Plazo de entrega de la oferta | `#offer`, `config.js` | Confirmar o quitar el feature. |
| Cifras `9+ / 4+ / 5+ / 100%` | `#stats`, `config.js` | Confirmar con el dueño; no se modificaron por ser datos preexistentes. |
| Precios de la oferta y servicios | `#offer`, `#services`, `config.js` | Confirmar vigencia. |
| Política de datos | Pendiente | Crear página real antes de añadir formulario. |

## 4. Checklist de verificación

- [x] Un solo `h1`, jerarquía `h2`/`h3`, `lang="es"`.
- [x] Canonical, robots, OG, Twitter Cards y JSON-LD válidos.
- [x] `robots.txt` y `sitemap.xml` disponibles.
- [x] Sin banner de error ni textos de error internos en el HTML.
- [x] Enlaces WhatsApp reales; sin `href="#"` funcionales.
- [x] Imágenes con `alt` y dimensiones.
- [x] Cuerpo a 16 px; sin scroll horizontal a 360 px (`scrollWidth 345 = clientWidth 345`).
- [x] Lighthouse local: **SEO 100 / Accessibility 100 / Best Practices 100**, sin fallos (antes: SEO 100 / A11y 94, con `color-contrast` y `target-size`).
- [x] Consola sin errores; `robots.txt` y `sitemap.xml` responden 200.
- [x] Capturas reales en WebP cargan con su `alt` y dimensiones (1280×800).
- [x] CTA fijo móvil no genera scroll horizontal (345 = 345 px a 360 px).
- [ ] Republicar en GitHub Pages y volver a medir Lighthouse sobre la URL pública.
- [ ] Confirmar datos de la tabla de placeholders.
