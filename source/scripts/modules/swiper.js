import { initBigSwiper } from './big-swiper.js';
import { initVerticalSwiper } from './vertical-swiper.js';
import { initGrid } from './grid-swiper.js';

export function initSwipers() {
  initBigSwiper();
  initVerticalSwiper();
  /* initGridSwiper(); */
  initGrid();
}
