# KAEL CORE® — Portfolio

Sitio personal de **Kael Core** — *Digital Independent Creator*.
Identidad: **Industrial Cyber Brutalism** · Concepto: **NOT EQUAL**.

## Estructura

| Archivo | Qué contiene |
|---|---|
| `index.html` | Esqueleto semántico del sitio (no editar contenido aquí) |
| `styles.css` | Todo el diseño: paleta, tipografía, secciones, responsive |
| `config.js` | **✏️ Todo el contenido editable** (ofertas, servicios, proyectos, testimonios, contacto) |
| `main.js` | Renderiza el contenido desde `config.js` + animaciones e interacciones |
| `logo.png`, `game-*.png`, `project-placeholder.svg` | Recursos visuales |

## Cómo cambiar la oferta / precio

Abre `config.js` y edita el objeto `offer`:

```js
offer: {
  badge: "Oferta especial",
  title: "2 Landing Pages Personalizadas",
  oldPrice: "$800.000",
  price: "$300.000",
  currency: "COP",
  note: "Landing individual $400.000 · Web completa desde $700.000 COP",
  timerLabel: "Oferta por tiempo limitado · dos landing pages",
  features: [ "...", "..." ],
  ctaLabel: "Quiero las 2 Landing Pages",
},
```

No hace falta tocar HTML ni JS: la tarjeta de oferta se genera sola.

## Cómo editar el resto del contenido

En el mismo `config.js`:

- `services` — tarjetas de servicios (`number`, `icon`, `title`, `description`)
- `projects` — proyectos del masonry (`title`, `image`, `tags`, `link`, `aspect`)
- `testimonials` — reseñas (`quote`, `author`, `role`)
- `stats` — cifras (`value`, `label`)
- `contact` — WhatsApp e Instagram
- `brand` — nombre, símbolo `≠`, tagline, manifiesto

## Diseño y estados

- **Tokens**: colores, tipografías, espaciados, bordes, sombras y movimiento están en `:root` (inicio de `styles.css`). Modificar allí mantiene consistencia global.
- **Modo oscuro**: es el estado por defecto; no hay variante clara.
- **Carga**: las secciones muestran skeletons con animación shimmer. El retardo se controla con `LOADING_DELAY` en `main.js` (pon `0` para carga instantánea).
- **Sin datos**: si un array (`projects`, `services`, `testimonials`, `stats`) está vacío, la sección muestra un estado “Sin contenido”.
- **Errores**: cada sección tiene un estado de error si falla su render; además hay un banner global si `config.js` no carga.
- **Enlaces**: si falta `contact.whatsapp`, los botones de WhatsApp se deshabilitan con `aria-disabled`.

## Accesibilidad

- Skip link “Saltar al contenido”, `aria-busy` durante la carga y `:focus-visible` con contorno ácido.
- Todas las imágenes tienen `alt`; los iconos son decorativos (`aria-hidden="true"`).
- botones/navegación con nombres accesibles; contraste AA (rojo de texto `#FF5A55` sobre fondo oscuro).
- Respeta `prefers-reduced-motion`.

## Iconos

Usan [Font Awesome 6](https://fontawesome.com/icons) (clases `fa-solid` / `fa-brands`).
Para cambiar un icono de servicio, busca el nombre en la web de Font Awesome y ponlo en `icon`.

## Tipografías

Space Grotesk (titulares) · Inter (cuerpo) · IBM Plex Mono (etiquetas/numeración).

## Ver el sitio en local

```bash
python -m http.server 8000
# abre http://localhost:8000
```

## Despliegue

GitHub Pages con dominio personalizado (`CNAME` → `kaelcore143.com`).
