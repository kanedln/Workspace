// Theme toggle with localStorage persistence
const STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

function getStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

function apply(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    const sun = btn.querySelector<HTMLElement>('[data-icon="sun"]');
    const moon = btn.querySelector<HTMLElement>('[data-icon="moon"]');
    if (sun && moon) {
      sun.style.display = theme === 'dark' ? 'block' : 'none';
      moon.style.display = theme === 'dark' ? 'none' : 'block';
    }
  }
}

function initTheme() {
  const stored = getStored();
  const initial: Theme =
    stored ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  apply(initial);

  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') as Theme;
    const next: Theme = current === 'light' ? 'dark' : 'light';
    try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    apply(next);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
