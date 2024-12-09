// Toggle Mobile Navigation Menu
const menuToggle = document.querySelector('header img');
const nav = document.querySelector('header nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Contact Us Button Alert
const contactButton = document.querySelector('main button');

contactButton.addEventListener('click', () => {
  alert('Thank you for reaching out! We will contact you shortly.');
});

// Highlight Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      currentSection = section.getAttribute('class');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.href.includes(currentSection)) {
      link.classList.add('active');
    }
  });
});
