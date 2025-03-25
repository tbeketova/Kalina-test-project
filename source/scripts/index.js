import { openDetails } from './modules/details-open.js';
import { openBurgerMenu } from './modules/burger-menu.js';

document.addEventListener('DOMContentLoaded', () => {
  openDetails();
  openBurgerMenu();

  window.addEventListener('resize', () => {
    openDetails(); // запускаем на каждом изменении ширины окна
  });
});

const swiper = new Swiper (".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-1-button-next',
    prevEl: '.slider-1-button-prev',
  },
});

