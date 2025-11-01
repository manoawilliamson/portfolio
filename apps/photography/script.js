document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
    });
  }

  // Filters
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('#gallery .card');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      cards.forEach(card => {
        const show = f === 'all' || card.dataset.category === f;
        card.style.display = show ? 'block' : 'none';
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const imgEl = lightbox?.querySelector('.modal__img');
  const captionEl = lightbox?.querySelector('.modal__caption');
  const closeBtn = lightbox?.querySelector('.modal__close');

  document.querySelectorAll('#gallery img').forEach(img => {
    img.addEventListener('click', () => {
      if (!lightbox || !imgEl || !captionEl) return;
      imgEl.src = img.src;
      captionEl.textContent = img.parentElement?.querySelector('figcaption')?.textContent || '';
      lightbox.style.display = 'grid';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  closeBtn?.addEventListener('click', () => {
    if (!lightbox) return;
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  });

  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });

  // Contact form
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    alert(`Thanks, ${data.get('name')}! I’ll be in touch soon.`);
    form.reset();
  });
});