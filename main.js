// Little Scholar Islamic School — Shared JS
// Hamburger menu toggle
function initNav() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      navLinks.classList.contains('open')
        ? (spans[0].style.transform = 'rotate(45deg) translate(5px,5px)',
           spans[1].style.opacity   = '0',
           spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)')
        : (spans[0].style.transform = '',
           spans[1].style.opacity   = '',
           spans[2].style.transform = '');
    });
  }
  // Mark active page
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a => {
    if (a.getAttribute('href') === location.pathname.split('/').pop() ||
        (location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// Scroll-reveal fade
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('fade-up'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => { initNav(); initScrollReveal(); });