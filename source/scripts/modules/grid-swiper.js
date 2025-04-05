import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initGridSwiper() {
  let gridSliderContainer = document.getElementById('img-slider');
  let gridSlider;

  function createGridSlider() {
    if (!gridSlider && gridSliderContainer) {
      gridSlider = new Swiper(gridSliderContainer, {
        modules: [Navigation],
        direction: 'horizontal',
        slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 12,
        navigation: {
          prevEl: '.grid-button-prev',
          nextEl: '.grid-button-next',
        },
        breakpoints: {
          834: {
            slidesPerView: 4,
            grid: {
              rows: 1,
            },
          }
        },
      });
    }
  }
  createGridSlider();

  function destroyGridSlider() {
    if (gridSlider) {
      gridSlider.destroy(true, true);
      gridSlider = null;
    }
  }

  function checkWindowSize() {
    if (window.innerWidth < 1920) {
      createGridSlider();
    } else {
      destroyGridSlider();
    }
  }
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
}
