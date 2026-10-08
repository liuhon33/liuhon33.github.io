'use strict';
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNav.classList.toggle('is-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 851px)').addEventListener('change', (event) => { if (event.matches) setMenu(false); });

document.querySelectorAll('[data-open-project]').forEach((link) => {
  link.addEventListener('click', () => {
    const details = document.getElementById(link.dataset.openProject);
    if (details) details.open = true;
  });
});
function openLinkedProject() {
  let target;
  try { target = document.getElementById(decodeURIComponent(window.location.hash.slice(1))); }
  catch { return; }
  if (!target) return;
  if (target instanceof HTMLDetailsElement) target.open = true;
  else if (target.matches('.project')) {
    const details = target.querySelector('details');
    if (details) details.open = true;
  }
}
openLinkedProject();
window.addEventListener('hashchange', openLinkedProject);

const dialog = document.getElementById('figure-dialog');
const dialogImage = document.getElementById('dialog-image');
let figureOpener = null;
if (typeof dialog.showModal === 'function') {
  document.querySelectorAll('[data-lightbox]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      figureOpener = link;
      dialogImage.src = link.href;
      dialogImage.alt = link.querySelector('img').alt;
      document.getElementById('dialog-original').href = link.href;
      document.getElementById('dialog-title').textContent = link.dataset.title;
      document.getElementById('dialog-caption').textContent = link.dataset.caption;
      dialog.showModal();
      document.body.classList.add('modal-open');
      dialog.scrollTop = 0;
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (figureOpener) figureOpener.focus({ preventScroll: true });
  });
}

const navLinks = Array.from(document.querySelectorAll('.desktop-nav a'));
const navSections = navLinks.map((link) => document.querySelector(link.getAttribute('href')));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(() => {
    const current = navSections.filter((section) => section.getBoundingClientRect().top <= 160).at(-1);
    navLinks.forEach((link, index) => {
      if (navSections[index] === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-85px 0px -65% 0px', threshold: 0 });
  navSections.forEach((section) => observer.observe(section));
}

let printState = [];
window.addEventListener('beforeprint', () => {
  printState = Array.from(document.querySelectorAll('.project-details'), (element) => [element, element.open]);
  printState.forEach(([element]) => { element.open = true; });
});
window.addEventListener('afterprint', () => printState.forEach(([element, open]) => { element.open = open; }));
