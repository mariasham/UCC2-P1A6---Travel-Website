// Navigation & dropdown behavior
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('open');
    });
  }

  // Dropdowns
  document.querySelectorAll('.has-dropdown').forEach(item => {
    const btn = item.querySelector('.drop-toggle');
    const menu = item.querySelector('.dropdown');
    btn.addEventListener('click', (e) => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('open');
      e.stopPropagation();
    });
  });

  // Close dropdowns on outside click or Esc
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(m => m.classList.remove('open'));
    document.querySelectorAll('.drop-toggle[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded','false'));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.dropdown.open').forEach(m => m.classList.remove('open'));
      document.querySelectorAll('.drop-toggle[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded','false'));
    }
  });
});