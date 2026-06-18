/* ─────────────────────────────────────────
   Aaron Gomes — Projects Page Scripts
   ───────────────────────────────────────── */

// Nav is always in scrolled (light) mode on this sub-page
// since there is no full-screen dark hero to scroll past.
const nav = document.getElementById('site-nav');

nav.classList.add('scrolled');

window.addEventListener('scroll', () => {
  nav.classList.add('scrolled');
});
