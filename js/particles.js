// ═══════════════════════════════════════
// particles.js — Underwater bubbles & ambience
// ═══════════════════════════════════════

const oceanBg = document.getElementById('ocean-bg');

function makeBubble() {
  const p = document.createElement('div');
  p.className = 'particle';

  // Vary bubble sizes: mostly small, occasionally medium
  const roll    = Math.random();
  const size    = roll < 0.65 ? Math.random() * 4 + 2    // tiny (2–6px)
                : roll < 0.90 ? Math.random() * 6 + 6    // small (6–12px)
                :               Math.random() * 8 + 12;  // medium (12–20px)

  const duration = size < 6  ? Math.random() * 8  + 8   // tiny rise fast
                 : size < 12 ? Math.random() * 10 + 12  // small moderate
                 :             Math.random() * 12 + 18; // medium slow

  const delay    = Math.random() * 6;
  const left     = Math.random() * 100;

  // Slight squish on larger bubbles for realism
  const scaleX   = size > 10 ? 0.85 + Math.random() * 0.15 : 1;

  p.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${left}%;
    bottom:-${size}px;
    animation-duration:${duration}s;
    animation-delay:${delay}s;
    transform:scaleX(${scaleX});
  `;

  oceanBg.appendChild(p);
  setTimeout(() => p.remove(), (duration + delay) * 1000 + 500);
}

// Spawn bubbles continuously — denser at bottom, clusters possible
setInterval(makeBubble, 500);

// Occasional cluster burst (3–5 bubbles close together)
function bubbleCluster() {
  const count = Math.floor(Math.random() * 3) + 3;
  for (let i = 0; i < count; i++) {
    setTimeout(makeBubble, i * 120);
  }
}
setInterval(bubbleCluster, 4500);

// Seed initial bubbles spread across different heights
for (let i = 0; i < 14; i++) {
  setTimeout(makeBubble, i * 250);
}
