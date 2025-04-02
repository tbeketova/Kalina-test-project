import { openDetails } from './modules/details-open.js';
import { openBurgerMenu } from './modules/burger-menu.js';
import { initBigSwiper } from './modules/swiper.js';
import { initVerticalSwiper } from './modules/swiper.js';
import { initGridSwiper } from './modules/swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  openDetails();
  openBurgerMenu();
  initBigSwiper(); //создание и уничтожение слайдера
  initVerticalSwiper();
  initGridSwiper();
});

