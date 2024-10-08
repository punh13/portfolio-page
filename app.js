const listElements = document.querySelectorAll('.my-portfolio-website');
const infoElements = document.querySelectorAll('.my-portfolio-website__info');

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li a');

document.addEventListener('mousemove', (event) => {
  let dot = document.querySelector('.dot');
  let mouseX = event.clientX;
  let mouseY = event.clientY;
  dot.style.left = `${mouseX}px`;
  dot.style.top = `${mouseY}px`;
});

window.addEventListener('scroll', () => {
  let navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});

const infoElementHandler = (index) => {
  infoElements[index].style.display = 'flex';
  const backdropElement = document.createElement('div');
  backdropElement.classList.add('backdrop');
  listElements[index].appendChild(backdropElement);
};

const removeBackdrop = (index) => {
  const backdropElement = listElements[index].querySelector('.backdrop');
  if (backdropElement) {
    backdropElement.remove();
  }
};

listElements.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    infoElementHandler(index);
  });

  item.addEventListener('mouseleave', () => {
    infoElements[index].style.display = 'none';
    removeBackdrop(index);
  });
});

const toggleMenu = () => {
  navLinks.classList.toggle('active');

  if (navLinks.classList.contains('active')) {
    hamburger.innerHTML = '<i class="fa-solid fa-x"></i>';
  } else {
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
};

const closeMenu = () => {
  navLinks.classList.remove('active');
  hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
};

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', (event) => {
  if (navLinks.classList.contains('active')) {
    closeMenu();
  }
});

navLinkItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});

AOS.init();
