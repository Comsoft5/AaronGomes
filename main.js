/* ─────────────────────────────────────────
   Aaron Gomes — Portfolio Scripts
   ───────────────────────────────────────── */

// Sticky nav: switch from transparent to frosted-glass after hero
const nav = document.getElementById('site-nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > window.innerHeight * 0.85);
});

// Scroll-to-top button
const scrollBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 600);
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
