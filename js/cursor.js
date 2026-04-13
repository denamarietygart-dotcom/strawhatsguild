// ═══════════════════════════════════════
// cursor.js — Custom glowing cursor
// ═══════════════════════════════════════

const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Enlarge cursor on interactive elements
document.querySelectorAll('button, a, [onclick]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.width    = '20px';
    cur.style.height   = '20px';
    cur.style.background = 'var(--red2)';
    ring.style.width   = '48px';
    ring.style.height  = '48px';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width    = '12px';
    cur.style.height   = '12px';
    cur.style.background = 'var(--gold2)';
    ring.style.width   = '32px';
    ring.style.height  = '32px';
  });
});
