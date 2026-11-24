/* ============================================================
   KAEL CORE® — RENDER + INTERACCIONES
   · El contenido ya existe en el HTML (indexable y sin JS).
   · config.js solo permite editarlo desde un único lugar;
     si falla, el HTML estático sigue siendo visible.
   · Ningún error interno se muestra al visitante.
   ============================================================ */

(function () {
  'use strict';

  /* ── Configuración de carga ──────────────────────────────
     Ajusta el retardo para hacer visible el skeleton.
     Pon 0 para producción (carga instantánea).            */
  const LOADING_DELAY = 400;

  const $ = (id) => document.getElementById(id);

  /* ── Utilidades ────────────────────────────────────────── */
  function setBusy(el, busy) {
    if (el) el.setAttribute('aria-busy', String(!!busy));
  }

  function emptyStateHTML(msg) {
    return `
      <div class="state" role="status">
        <div class="state-icon"><i class="fa-solid fa-inbox" aria-hidden="true"></i></div>
        <div class="state-title">Sin contenido</div>
        <p class="state-text">${msg}</p>
      </div>`;
  }

  /** Ejecuta `fn`. Si falla, el contenido estático del HTML permanece visible. */
  function guard(container, fn) {
    try {
      fn();
    } catch (err) {
      if (window.console) console.error(err);
    } finally {
      setBusy(container, false);
    }
  }

  function waLink(text) {
    const num = CONFIG.contact && CONFIG.contact.whatsapp;
    if (!num) return null;
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  }

  /** Enlaza de forma segura; si no hay URL, lo deja deshabilitado. */
  function setLink(el, url) {
    if (!el) return;
    if (url) {
      el.href = url;
      el.removeAttribute('aria-disabled');
    } else {
      el.removeAttribute('href');
      el.setAttribute('aria-disabled', 'true');
      el.setAttribute('title', 'Contacto no disponible');
    }
  }

  /** Imagen con fallback si el recurso falla. */
  function projectImage(src, alt, aspect) {
    return `<img src="${src}" alt="${alt}" loading="lazy" width="1280" height="800"
      style="aspect-ratio:${aspect || '4/3'};"
      onerror="this.onerror=null;this.src='project-placeholder.svg';this.alt='Imagen no disponible';">`;
  }

  /* ── Navbar ────────────────────────────────────────────── */
  function renderNav() {
    const items = Array.isArray(CONFIG.nav) ? CONFIG.nav : [];
    const ctaUrl = waLink(CONFIG.contact.whatsappText || 'Hola.');
    const cta = `<li><a class="nav-cta" href="${ctaUrl || '#'}" ${ctaUrl ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'}>Contactar</a></li>`;
    $('navLinks').innerHTML =
      items.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('') + cta;
    setBusy($('navLinks'), false);

    const name = CONFIG.brand && CONFIG.brand.name;
    if (name) $('navLogoName').textContent = name;
    if (CONFIG.brand && CONFIG.brand.symbol) $('navLogoSymbol').textContent = CONFIG.brand.symbol;
  }

  /* ── Hero ──────────────────────────────────────────────── */
  function renderHero() {
    const b = CONFIG.brand || {};
    $('heroKicker').innerHTML = `${b.kicker || ''} <span class="symbol">${b.symbol || '≠'}</span>`;
    $('heroTitle').innerHTML = `${b.name || 'Kael Core'}<span class="reg">${b.registered || ''}</span>`;
    $('heroTagline').innerHTML = `<span class="symbol">${b.symbol || '≠'}</span> ${b.tagline || ''}`;
    $('heroDesc').textContent = b.description || '';
    $('metaRole').textContent = b.role || '';
    $('heroSymbol').innerHTML =
      `${b.symbol || '≠'}<span class="glitch" aria-hidden="true">${b.symbol || '≠'}</span>` +
      `<span class="glitch b" aria-hidden="true">${b.symbol || '≠'}</span>`;
    // El símbolo ya no es un skeleton: quita la clase
    $('heroSymbol').classList.remove('skeleton');

    setBusy(document.querySelector('#hero .hero-main'), false);
    setBusy(document.querySelector('#hero .hero-side'), false);
  }

  /* ── Marquee ───────────────────────────────────────────── */
  function renderMarquee() {
    const items = Array.isArray(CONFIG.marquee) && CONFIG.marquee.length
      ? CONFIG.marquee
      : ['Not Equal'];
    const group = `<div class="marquee-group">${items
      .map((t) => `<span>${t}</span><span class="symbol">${(CONFIG.brand && CONFIG.brand.symbol) || '≠'}</span>`)
      .join('')}</div>`;
    // Dos grupos idénticos: al desplazar -50% el segundo ocupa el lugar del primero sin salto.
    $('marqueeTrack').innerHTML = group + group;
    setBusy($('marqueeTrack'), false);
  }

  /* ── Stats ─────────────────────────────────────────────── */
  function renderStats() {
    const c = $('statsGrid');
    const items = Array.isArray(CONFIG.stats) ? CONFIG.stats : [];
    if (!items.length) { c.innerHTML = emptyStateHTML('Aún no hay cifras para mostrar.'); setBusy(c, false); return; }
    c.innerHTML = items.map((s) => `
      <div class="stat-item reveal">
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');
    setBusy(c, false);
  }

  /* ── Servicios ─────────────────────────────────────────── */
  function renderServices() {
    const c = $('servicesGrid');
    const items = Array.isArray(CONFIG.services) ? CONFIG.services : [];
    if (!items.length) { c.innerHTML = emptyStateHTML('No hay servicios publicados todavía.'); setBusy(c, false); return; }
    c.innerHTML = items.map((s) => `
      <article class="service-card reveal">
        <span class="service-number">${s.number || ''} /</span>
        <div class="service-icon"><i class="fa-solid ${s.icon || 'fa-circle'}" aria-hidden="true"></i></div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </article>`).join('');
    setBusy(c, false);
  }

  /* ── Manifiesto ────────────────────────────────────────── */
  function renderManifesto() {
    const b = CONFIG.brand || {};
    $('manifestoTitle').textContent = b.manifestoTitle || '';
    $('manifestoText').textContent = b.manifesto || '';
    const principles = Array.isArray(b.principles) ? b.principles : [];
    $('manifestoPrinciples').innerHTML = principles.length
      ? principles.map((p) => `<li><span class="symbol">${b.symbol || '≠'}</span> ${p}</li>`).join('')
      : '<li><span class="symbol">≠</span> NOT EQUAL.</li>';
    $('manifestoSymbol').textContent = b.symbol || '≠';
    $('manifestoSymbol').classList.remove('skeleton');
    $('manifestoCaption').textContent = `${b.tagline || ''} — ${b.role || ''}`;
    setBusy($('manifesto'), false);
  }

  /* ── Proyectos ─────────────────────────────────────────── */
  function renderProjects() {
    const c = $('masonry');
    const items = Array.isArray(CONFIG.projects) ? CONFIG.projects : [];
    if (!items.length) { c.innerHTML = emptyStateHTML('No hay proyectos para mostrar todavía.'); setBusy(c, false); return; }
    c.innerHTML = items.map((p) => `
      <article class="masonry-item reveal">
        ${projectImage(p.image, p.alt || p.title, p.aspect)}
        <div class="project-body">
          <div class="project-meta">
            <span class="num">/${p.number || '00'}</span>
            <span>${(p.tags && p.tags[0]) || 'Proyecto'}</span>
          </div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="tags">${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join('')}</div>
          <a href="${p.link}" target="_blank" rel="noopener" class="project-link">
            ${p.linkLabel || 'Ver'} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </article>`).join('');
    setBusy(c, false);
  }

  /* ── Oferta ────────────────────────────────────────────── */
  function renderOffer() {
    const card = $('offerCard');
    if (!CONFIG.offer) {
      card.innerHTML = emptyStateHTML('No hay una oferta activa por ahora.');
      return;
    }
    const o = CONFIG.offer;
    $('offerBadge').textContent = o.badge || 'Oferta';
    $('offerIndex').textContent = (o.number ? o.number + ' — ' : '') + 'Oferta especial';
    $('offerTitle').textContent = o.title || '';
    $('offerOld').textContent = o.oldPrice || '';
    $('offerNow').innerHTML = o.price
      ? `${o.price}<span class="currency"> ${o.currency || ''}</span>`
      : 'Consultar';
    $('offerNote').textContent = o.note || '';
    $('offerTimer').innerHTML = o.timerLabel
      ? `<i class="fa-solid fa-clock" aria-hidden="true"></i> ${o.timerLabel}`
      : '';

    const feats = Array.isArray(o.features) ? o.features : [];
    $('offerFeatures').innerHTML = feats.length
      ? feats.map((f) => `<li><i class="fa-solid fa-check" aria-hidden="true"></i> ${f}</li>`).join('')
      : '<li>Detalles a convenir</li>';

    const url = waLink(`Hola, me interesa: ${o.title || 'la oferta'}`);
    setLink($('offerCta'), url);
    $('offerCtaLabel').textContent = o.ctaLabel || 'Contactar';

    setBusy($('offerFeatures'), false);
    setBusy(card, false);
  }

  /* ── Testimonios — carrusel ────────────────────────────── */
  let carouselIndex = 0;
  let carouselItems = [];

  function renderTestimonials() {
    const root = $('testimonialCarousel');
    const track = $('carouselTrack');
    const dots = $('carouselDots');
    const items = Array.isArray(CONFIG.testimonials) ? CONFIG.testimonials : [];

    if (!items.length) {
      track.innerHTML = emptyStateHTML('Aún no hay testimonios.');
      dots.innerHTML = '';
      $('carouselPrev').disabled = true;
      $('carouselNext').disabled = true;
      setBusy(root, false);
      return;
    }

    carouselItems = items;
    carouselIndex = 0;
    track.innerHTML = items.map((t, i) => `
      <article class="testi-card carousel-slide" role="group" aria-roledescription="diapositiva"
               aria-label="${i + 1} de ${items.length}" aria-hidden="${i !== 0}">
        <div class="testi-stars" aria-label="5 de 5 estrellas">★★★★★</div>
        <p class="testi-text">“${t.quote}”</p>
        <div class="testi-author">
          <div class="testi-avatar" aria-hidden="true">${(t.author || '·').charAt(0)}</div>
          <div class="testi-info">
            <strong>${t.author}</strong>
            <span>${t.role}</span>
          </div>
        </div>
      </article>`).join('');

    dots.innerHTML = items.map((_, i) => `
      <button type="button" class="carousel-dot" role="tab"
              aria-label="Ir al testimonio ${i + 1}"
              aria-selected="${i === 0}" data-index="${i}"></button>`).join('');

    setBusy(root, false);
    updateCarousel();
    initCarouselControls();
  }

  function updateCarousel() {
    const track = $('carouselTrack');
    const slides = track.querySelectorAll('.carousel-slide');
    track.style.transform = `translateX(-${carouselIndex * 100}%)`;

    slides.forEach((s, i) => s.setAttribute('aria-hidden', String(i !== carouselIndex)));
    $('carouselDots').querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.setAttribute('aria-selected', String(i === carouselIndex))
    );
    $('carouselPrev').disabled = carouselIndex === 0;
    $('carouselNext').disabled = carouselIndex === carouselItems.length - 1;

    const current = carouselItems[carouselIndex];
    $('carouselStatus').textContent =
      `Testimonio ${carouselIndex + 1} de ${carouselItems.length}: ${current.author}`;
  }

  function goToCarousel(index) {
    if (!carouselItems.length) return;
    carouselIndex = Math.max(0, Math.min(index, carouselItems.length - 1));
    updateCarousel();
  }

  function initCarouselControls() {
    $('carouselPrev').addEventListener('click', () => goToCarousel(carouselIndex - 1));
    $('carouselNext').addEventListener('click', () => goToCarousel(carouselIndex + 1));
    $('carouselDots').querySelectorAll('.carousel-dot').forEach((dot) =>
      dot.addEventListener('click', () => goToCarousel(Number(dot.dataset.index)))
    );

    const root = $('testimonialCarousel');
    root.setAttribute('tabindex', '0');
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); goToCarousel(carouselIndex - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goToCarousel(carouselIndex + 1); }
    });

    // Swipe táctil
    let startX = null;
    root.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', (e) => {
      if (startX === null) return;
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) goToCarousel(carouselIndex + (diff < 0 ? 1 : -1));
      startX = null;
    }, { passive: true });
  }

  /* ── Footer ────────────────────────────────────────────── */
  function renderFooter() {
    const b = CONFIG.brand || {};
    const wa = waLink(CONFIG.contact.whatsappText || 'Hola.');
    const ig = (CONFIG.contact && CONFIG.contact.instagram) || '#';
    $('footerContent').innerHTML = `
      <span>© ${new Date().getFullYear()} ${b.name || 'Kael Core'}${b.registered || ''}
        <span class="footer-symbol"> ${b.symbol || '≠'}</span> ${b.tagline || ''}</span>
      <span class="footer-links">
        <a href="${wa || '#'}" ${wa ? 'target="_blank" rel="noopener"' : 'aria-disabled="true"'}>WhatsApp</a>
        <a href="${ig}" target="_blank" rel="noopener">Instagram</a>
      </span>`;
    setBusy($('footerContent'), false);
  }

  /* ── Enlaces de WhatsApp ───────────────────────────────── */
  function renderWhatsApp() {
    const url = waLink(CONFIG.contact.whatsappText || 'Hola.');
    setLink($('waFloat'), url);
    setLink($('ctaWhatsapp'), url);
  }

  /* ── Interacciones ─────────────────────────────────────── */
  function initMenu() {
    const burger = $('hamburger');
    const links = $('navLinks');
    if (!burger || !links) return;
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      })
    );
  }

  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }

  /* ── Barra de progreso de lectura ──────────────────────── */
  var progress = $('scrollProgress');
  if (progress) {
    var ticking = false;
    var updateProgress = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var ratio = max > 0 ? doc.scrollTop / max : 0;
      progress.style.transform = 'scaleX(' + Math.min(1, Math.max(0, ratio)) + ')';
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateProgress);
      }
    }, { passive: true });
    updateProgress();
  }

  /* ── Boot ──────────────────────────────────────────────── */
  function boot() {
    try {
      guard($('navLinks'), renderNav);
      guard(document.querySelector('#hero .hero-main'), renderHero);
      guard($('marqueeTrack'), renderMarquee);
      guard($('statsGrid'), renderStats);
      guard($('servicesGrid'), renderServices);
      guard($('manifesto'), renderManifesto);
      guard($('masonry'), renderProjects);
      guard($('offerCard'), renderOffer);
      guard($('testimonialCarousel'), renderTestimonials);
      guard($('footerContent'), renderFooter);
      renderWhatsApp();
      initMenu();
      initReveal();
    } catch (err) {
      if (window.console) console.error(err);
    }
  }

  // Espera un instante para que el skeleton se pinte antes del contenido
  setTimeout(boot, LOADING_DELAY);
})();
