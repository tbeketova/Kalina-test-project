import { openDetails } from './modules/details-open.js';
import { openBurgerMenu } from './modules/burger-menu.js';
import { initSwipers } from './modules/swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initSwipers();
  openDetails();
  openBurgerMenu();
});


