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

// Email modal — close on Escape or overlay click
const emailModal = document.getElementById('email-modal');

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') emailModal.classList.remove('open');
});

emailModal.addEventListener('click', (e) => {
  if (e.target === emailModal) emailModal.classList.remove('open');
});
