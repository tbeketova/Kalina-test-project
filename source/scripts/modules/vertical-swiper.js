import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initVerticalSwiper() {
  const verticalSliderContainer = document.getElementById('vertical-slider');
  let verticalSlider;

  function createVerticalSlider() {
    if(!verticalSlider && verticalSliderContainer) {
      verticalSlider = new Swiper(verticalSliderContainer, {
        modules: [Navigation],
        direction: 'horizontal',
        spaceBetween: 20,
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        },
        breakpoints: {
          375: {
            slidesPerView: 'auto',
          },
          834: {
            slidesPerView: 'auto',
            spaceBetween: 28,
          },
          1024: {
            slidesPerView: 'auto',
            spaceBetween: 35,
          },
        },
      });
    }
  }
  createVerticalSlider();

  function destroyVerticalSlider() {
    if(verticalSlider) {
      verticalSlider.destroy(true, true); //destroy(deleteInstance, cleanStyles)
      verticalSlider = null;
    }
  }

  function checkWindowSize() {
    if (window.innerWidth < 1920) {
      createVerticalSlider();
    } else {
      destroyVerticalSlider();
    }
  }
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize); //Следим за изменением ширины окна
}
