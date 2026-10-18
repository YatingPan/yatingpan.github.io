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

// Image links remain usable when the native dialog API is unavailable.
(() => {
  const photos = [...document.querySelectorAll('.life-photo')];
  const viewer = document.querySelector('#photo-viewer');
  if (!photos.length || !viewer || typeof viewer.showModal !== 'function') return;

  const image = viewer.querySelector('.photo-viewer-image');
  const caption = viewer.querySelector('#photo-viewer-caption');
  const count = viewer.querySelector('.photo-viewer-count');
  let currentPhoto = 0;
  let opener;

  function showPhoto(index) {
    currentPhoto = (index + photos.length) % photos.length;
    const photo = photos[currentPhoto];
    image.src = photo.href;
    image.alt = photo.querySelector('img').alt;
    caption.textContent = photo.dataset.caption;
    count.textContent = `${currentPhoto + 1} / ${photos.length}`;
  }

  photos.forEach((photo, index) => {
    photo.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = photo;
      showPhoto(index);
      viewer.showModal();
      document.body.classList.add('photo-viewer-open');
    });
  });
  viewer.querySelector('.photo-viewer-close').addEventListener('click', () => viewer.close());
  viewer.querySelectorAll('[data-photo-direction]').forEach(button => {
    button.addEventListener('click', () => showPhoto(currentPhoto + Number(button.dataset.photoDirection)));
  });
  viewer.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showPhoto(currentPhoto + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  viewer.addEventListener('click', event => {
    if (event.target === viewer) viewer.close();
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('photo-viewer-open');
    opener?.focus({ preventScroll: true });
  });
})();
