  document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('show');
      }
    });
  });

window.addEventListener('scroll', function () {
  const logo = document.getElementById('navbarLogo');
  const navBanner = document.getElementById('mainNavbar');
  const navbar = document.getElementsByClassName('navbar')[0];

  if (window.scrollY > 50) {
    logo.classList.add('shrunk');
    navBanner.classList.add('shrunk');
    navbar.classList.add('shrunk');
  } else {
    logo.classList.remove('shrunk');
    navBanner.classList.remove('shrunk');
    navbar.classList.remove('shrunk');
  }
});