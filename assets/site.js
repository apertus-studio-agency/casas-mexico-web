// Casas México — comportamiento compartido del sitio (menú hamburguesa)
document.addEventListener('DOMContentLoaded', function () {
  var toggleBtn = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  var header = document.querySelector('.site-header');
  if (!toggleBtn || !menu) return;

  function closeMenu() {
    menu.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (header) header.classList.remove('menu-open');
  }
  function openMenu() {
    menu.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (header) header.classList.add('menu-open');
  }

  toggleBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu.classList.contains('is-open')) closeMenu();
    else openMenu();
  });

  document.addEventListener('click', function (e) {
    if (menu.classList.contains('is-open') && !menu.contains(e.target) && e.target !== toggleBtn) {
      closeMenu();
    }
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
});
