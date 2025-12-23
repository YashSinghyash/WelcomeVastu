// No JS needed yet.

const btn = document.querySelector('.menu-button');
const panel = document.querySelector('#mobile-menu');

function setOpen(open) {
  if (!btn || !panel) return;
  btn.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
}

setOpen(false);

btn?.addEventListener('click', () => {
  const open = btn.getAttribute('aria-expanded') === 'true';
  setOpen(!open);
});

// close when clicking outside
document.addEventListener('click', (e) => {
  if (!btn || !panel) return;
  const open = btn.getAttribute('aria-expanded') === 'true';
  if (!open) return;
  const t = e.target;
  if (!(t instanceof Node)) return;
  if (btn.contains(t) || panel.contains(t)) return;
  setOpen(false);
});

// close on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setOpen(false);
});

// close when selecting a link
panel?.addEventListener('click', (e) => {
  const t = e.target;
  if (t instanceof Element && t.closest('a')) setOpen(false);
});
