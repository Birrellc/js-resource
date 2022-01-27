// Global

const menuToggler = document.getElementById('menu-toggler');
const navMobile = document.getElementById('nav');
const header = document.getElementById('header');

// Toggle Nav

const toggleMenu = () => {
  navMobile.classList.toggle('active');
  header.classList.toggle('active');
};

menuToggler.addEventListener('click', toggleMenu);

// header Scroll
const headerScroll = () => {
  if (this.scrollY >= 30) {
    header.classList.add('active-scroll');
  } else {
    header.classList.remove('active-scroll');
  }
};

window.addEventListener('scroll', headerScroll);
