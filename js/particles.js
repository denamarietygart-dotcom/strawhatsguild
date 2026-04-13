// ═══════════════════════════════════════
// particles.js — Floating ocean particles
// ═══════════════════════════════════════

const oceanBg = document.getElementById('ocean-bg');

function makeParticle() {
  const p = document.createElement('div');
  p.className = 'particle';

  const size     = Math.random() * 4 + 2;
  const duration = Math.random() * 15 + 10;
  const delay    = Math.random() * 8;

  p.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${Math.random() * 100}%;
    bottom:${Math.random() * 30}%;
    animation-duration:${duration}s;
    animation-delay:${delay}s;
  `;

  oceanBg.appendChild(p);

  // Clean up after animation completes
  setTimeout(() => p.remove(), (duration + delay) * 1000 + 500);
}

// Spawn particles on interval
setInterval(makeParticle, 800);

// Seed a few on load
for (let i = 0; i < 8; i++) {
  setTimeout(makeParticle, i * 400);
}
