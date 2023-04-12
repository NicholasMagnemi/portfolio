const menu = document.querySelector<HTMLDivElement>('#moble-menu');
const menuLinks = document.querySelector<HTMLUListElement>('.navbar-menu');

menu?.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks?.classList.toggle('active');
});