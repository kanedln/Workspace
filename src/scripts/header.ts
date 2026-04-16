// Header scroll effect + mobile nav toggle with focus management
function initHeader() {
  const header = document.getElementById('header');
  if (header) {
    const updateScrolled = () => {
      if (window.scrollY > 50) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
  }

  const toggle = document.getElementById('navToggle');
  const panel = document.getElementById('mobileNav');
  if (!toggle || !panel) return;

  const open = () => {
    panel.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    const firstLink = panel.querySelector<HTMLElement>('a');
    firstLink?.focus();
  };

  const close = () => {
    panel.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    toggle.focus();
  };

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.contains('open');
    if (isOpen) close();
    else open();
  });

  panel.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      if (panel.classList.contains('open')) close();
    })
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) close();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeader);
} else {
  initHeader();
}
