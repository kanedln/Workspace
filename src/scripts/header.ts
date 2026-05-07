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

  document.addEventListener('click', (e) => {
    if (!panel.classList.contains('open')) return;
    const target = e.target as Node;
    if (!panel.contains(target) && !toggle.contains(target)) close();
  });

  // Scrollspy for same-page hash links on the home page.
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(
    '.nav-desktop a[href^="/#"], .mobile-nav a[href^="/#"]'
  );
  const sections = Array.from(navLinks)
    .map((link) => link.getAttribute('href')?.replace('/#', ''))
    .filter((id): id is string => Boolean(id))
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => Boolean(section));

  if (window.location.pathname === '/' && sections.length > 0) {
    const setActive = (id: string) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        const active = href === `/#${id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeader);
} else {
  initHeader();
}
