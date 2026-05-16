/* ============================================================
   IVANA PORTFOLIO — JS
   ============================================================ */

// ---- CAROUSEL ----
const track = document.getElementById('projects-track');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (track && prevBtn && nextBtn) {
  const wrap = track.parentElement;

  const cardWidth = () => {
    const card = track.querySelector('.project-card');
    if (!card) return 304;
    return card.offsetWidth + 24;
  };

  nextBtn.addEventListener('click', () => { wrap.scrollLeft += cardWidth(); });
  prevBtn.addEventListener('click', () => { wrap.scrollLeft -= cardWidth(); });

  // Drag to scroll
  let isDragging = false, startX = 0, startScroll = 0;
  wrap.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.pageX;
    startScroll = wrap.scrollLeft;
    wrap.classList.add('dragging');
  });
  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    wrap.scrollLeft = startScroll - (e.pageX - startX);
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
    wrap.classList.remove('dragging');
  });
  wrap.addEventListener('click', e => { if (Math.abs(wrap.scrollLeft - startScroll) > 5) e.preventDefault(); }, true);
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
    link.parentElement.querySelector('.nav-num').style.opacity = '';
    link.style.color = '';
    link.style.fontWeight = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#ffffff';
      link.style.fontWeight = '700';
      link.parentElement.querySelector('.nav-num').style.opacity = '1';
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
