// ═══════════════════════════════════════
// nav.js — Section routing, navbar, utilities
// ═══════════════════════════════════════

// ── SECTION SWITCHER ──
function show(id, btn) {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });

  // Deactivate all nav buttons (excluding discord button)
  document.querySelectorAll('.nav-links button:not(.nav-discord)').forEach(b => {
    b.classList.remove('active');
  });

  // Show target section
  const el = document.getElementById(id);
  if (!el) return;

  // Hero uses flex, others use block
  el.style.display = (id === 'hero') ? 'flex' : 'block';
  el.classList.add('active');

  // Activate nav button
  if (btn && !btn.classList.contains('nav-discord')) {
    btn.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── EXTERNAL LINK OPENER ──
function openLink(url) {
  window.open(url, '_blank');
}

// ── NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background  = 'rgba(4,8,15,0.96)';
    navbar.style.boxShadow   = '0 4px 30px rgba(0,0,0,0.5)';
  } else {
    navbar.style.background  = 'rgba(4,8,15,0.85)';
    navbar.style.boxShadow   = 'none';
  }
});

// ── INIT — hide non-active sections on load ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.page-section').forEach(s => {
    if (!s.classList.contains('active')) {
      s.style.display = 'none';
    }
  });
});
