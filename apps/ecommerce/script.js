document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', (!expanded).toString());
      navMenu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  // Category filtering
  const tabs = document.querySelectorAll('.category-tab');
  const products = document.querySelectorAll('.product-card');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const c = tab.dataset.category;
      products.forEach(p => {
        p.style.display = (c === 'all' || p.dataset.category === c) ? '' : 'none';
      });
    });
  });

  // Back to top
  const backToTop = document.querySelector('.back-to-top');
  const toggleBackToTop = () => {
    if (!backToTop) return;
    if (window.scrollY > 300) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  };
  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  // Testimonials dot navigation (basic)
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const cards = document.querySelectorAll('.testimonials-slider .testimonial-card');
  let activeIndex = 0;
  const setActive = (i) => {
    activeIndex = i;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
    cards.forEach((c, idx) => c.style.display = (idx === i) ? '' : 'none');
  };
  if (dots.length && cards.length) {
    setActive(0);
    dots.forEach((d, idx) => d.addEventListener('click', () => setActive(idx)));
  }

  // Contact form simple handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        alert('Please fill in your name, email, and message.');
        return;
      }
      alert(`Thanks, ${name}! We will reply to ${email} soon.`);
      contactForm.reset();
    });
  }
});