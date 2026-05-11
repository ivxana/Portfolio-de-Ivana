/* ============================================================
   IVANA PORTFOLIO — JS
   ============================================================ */

// ---- CAROUSEL ----
const track = document.getElementById('projects-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (track && prevBtn && nextBtn) {
  const cardWidth = () => {
    const card = track.querySelector('.project-card');
    if (!card) return 304;
    return card.offsetWidth + 24; // width + gap
  };

  let currentIndex = 0;
  const totalCards = track.querySelectorAll('.project-card').length;

  function getVisibleCount() {
    const wrapWidth = track.parentElement.offsetWidth;
    return Math.floor(wrapWidth / cardWidth());
  }

  function updateCarousel() {
    const maxIndex = totalCards - getVisibleCount();
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
    track.style.transform = `translateX(-${currentIndex * cardWidth()}px)`;
  }

  nextBtn.addEventListener('click', () => { currentIndex++; updateCarousel(); });
  prevBtn.addEventListener('click', () => { currentIndex--; updateCarousel(); });

  window.addEventListener('resize', updateCarousel);
}

// ---- BELIEFS EXPAND ----
document.querySelectorAll('.belief-item').forEach(item => {
  const btn = item.querySelector('.plus-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.belief-item').forEach(i => {
      i.classList.remove('open');
      const b = i.querySelector('.plus-btn');
      if (b) b.textContent = '+';
    });

    if (!isOpen) {
      item.classList.add('open');
      btn.textContent = '×';
    }
  });
});

// ---- ACTIVE NAV LINK (scroll spy) ----
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.sidenav-links a');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--purple)';
    }
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });

// ---- PHOTO FALLBACK PLACEHOLDER ----
const photoFrame = document.querySelector('.photo-frame');
if (photoFrame) {
  const img = photoFrame.querySelector('img');
  if (img) {
    img.addEventListener('error', () => {
      photoFrame.classList.add('no-photo');
      photoFrame.innerHTML = '<div class="photo-placeholder-text">Add your photo here<br/><small>assets/ivana.jpg</small></div>';
    });
  }
}
