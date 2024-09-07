const listElements = document.querySelectorAll('.my-portfolio-website');
const infoElements = document.querySelectorAll('.my-portfolio-website__info');

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links li a');

document.addEventListener('mousemove', (event) => {
  let dot = document.getElementById('dot');
  dot.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
});

window.addEventListener('scroll', () => {
  let navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = '#333';
  } else {
    navbar.style.backgroundColor = 'transparent';
  }
});

const infoElementHandler = (index) => {
  infoElements[index].style.display = 'block';
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
