const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    mobileNav.classList.toggle(navOpenedClass);

    closeBtnIcn.classList.toggle(arrowLeftClass);
    closeBtnIcn.classList.toggle(arrowRightClass);

  }
});

// swiper

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {

    el: '.swiper-pagination',
    clickable: true,
  },
});

//faq

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    const iconClass = isOpen ? 'ri-subtract-fill' : 'ri-add-fill';
    const iconElement = faqItems.Btn.querySelector('i');
    iconElement.classList = `${iconClass} text-2xl`;
  });
});


// scroll reveal animation 

const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 225,
  //reset: true
});

// hero

sr.reveal('.hero__text',{origin: 'top'});
sr.reveal('.hero__img');

// stats

sr.reveal('.stats__item',{
  delay: 300,
  distance: '100px',
  interval: 100,
  origin: 'top',
});


//services

sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});


//cita

sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

// testimonial

sr.reveal('.testimonial');
sr.reveal('.testimonial__constainer');

//P+F

sr.reveal('.faq__title');
sr.reveal('.faq__item', {
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});


//blog 

sr.reveal('.blog__title');
sr.reveal('.blog__post',{
  delay: 600,
  distance: '100px',
  interval: 100,
  oringin: 'bottom',
});

//footer

sr.reveal('.footer__item',{
  delay: 600,
  distance: '100px',
  interval: 100,
  origin: 'bottom',
});