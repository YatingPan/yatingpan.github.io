// Navigation is a progressive enhancement; all content and links work without JavaScript.
const sections = [...document.querySelectorAll('main section[id]')];
const navigation = [...document.querySelectorAll('.section-nav a')];
let scheduled = false;
function updateNavigation() {
  scheduled = false;
  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 155) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
    current = sections.at(-1)?.id;
  }
  for (const link of navigation) {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
window.addEventListener('resize', updateNavigation);
updateNavigation();
