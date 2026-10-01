// Mobile menu: the menu button shows/hides the nav links on small screens.
(function () {
  const button = document.getElementById('menu-button');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = !menu.classList.toggle('hidden');
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('.material-symbols-outlined').textContent = isOpen ? 'close' : 'menu';
  });
})();
