(function () {
  var btn = document.getElementById('hamburger-btn');
  var nav = document.getElementById('mobile-nav');
  var close = document.getElementById('mobile-nav-close');
  function openNav() { if (nav) nav.classList.add('open'); }
  function closeNav() { if (nav) nav.classList.remove('open'); }
  if (btn) btn.addEventListener('click', openNav);
  if (close) close.addEventListener('click', closeNav);
  if (nav) {
    nav.addEventListener('click', function (e) { if (e.target === nav) closeNav(); });
    document.querySelectorAll('.mobile-nav-link').forEach(function (l) {
      l.addEventListener('click', closeNav);
    });
  }
})();
