/* ═══════════════════════════════════════════
   IVANA PORTFOLIO — script.js
═══════════════════════════════════════════ */

// ── Scroll Reveal ──────────────────────────
const revealEls = document.querySelectorAll(
  '.work-card, .note-card, .belief-item, .about-snippet, .drives-block, .quote-block, .identity-words, .sticky-note, .currently-block'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));


// ── Active nav on scroll ───────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-links a[data-section]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));


// ── Beliefs accordion ─────────────────────
const beliefItems = document.querySelectorAll('.belief-item');

beliefItems.forEach(item => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    beliefItems.forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});


// ── Work carousel (mobile) ────────────────
const workGrid = document.getElementById('work-grid');
const prevBtn  = document.getElementById('prev-btn');
const nextBtn  = document.getElementById('next-btn');

let currentCard = 0;

function updateCarousel() {
  const cards = workGrid.querySelectorAll('.work-card');
  const isMobile = window.innerWidth < 700;

  if (!isMobile) {
    workGrid.style.transform = '';
    return;
  }

  const cardW = cards[0]?.offsetWidth + 24 || 0;
  workGrid.style.transform = `translateX(-${currentCard * cardW}px)`;
}

prevBtn?.addEventListener('click', () => {
  const cards = workGrid.querySelectorAll('.work-card');
  currentCard = Math.max(0, currentCard - 1);
  updateCarousel();
});

nextBtn?.addEventListener('click', () => {
  const cards = workGrid.querySelectorAll('.work-card');
  currentCard = Math.min(cards.length - 1, currentCard + 1);
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);


// ── Smooth anchor scrolling ────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── Subtle cursor trail on hero ────────────
const hero = document.querySelector('.hero');
if (hero && window.innerWidth > 960) {
  let trail = [];
  hero.addEventListener('mousemove', (e) => {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      width: 4px; height: 4px;
      border-radius: 50%;
      background: rgba(93, 47, 194, 0.25);
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.6s ease;
    `;
    document.body.appendChild(dot);
    trail.push(dot);

    setTimeout(() => {
      dot.style.opacity = '0';
      setTimeout(() => dot.remove(), 600);
    }, 100);

    if (trail.length > 20) trail.shift();
  });
}
