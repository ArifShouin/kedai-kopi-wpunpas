//toggle navbarNav
const navbarNav = document.querySelector('.navbar-nav');

//toggle h-menu
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle('active');
};

//remove navbarNav 
window.addEventListener('click', function(e) {
  if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active')
  }
})