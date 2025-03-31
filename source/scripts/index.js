import { openDetails } from './modules/details-open.js';
import { openBurgerMenu } from './modules/burger-menu.js';
import { initSwiper, checkBreakpoint } from './modules/swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  openDetails();
  // Инициализация мобильного меню
  openBurgerMenu();
  // Инициализация слайдера отзывов
  initSwiper();
  // Уничтожение слайдера
  checkBreakpoint();

  window.addEventListener('resize', () => {
    openDetails(); // запускаем на каждом изменении ширины окна
  });
});

