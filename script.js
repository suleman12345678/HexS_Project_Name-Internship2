let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');  
  navbar.classList.toggle('active');  
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// typing text code

const typed = new Typed('.multiple-text', {
  strings: ['Fitness Coach', 'Body Builder', 'Personal Trainer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
