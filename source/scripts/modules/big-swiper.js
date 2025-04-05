import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initBigSwiper() {
  const bigSliderContainer = document.getElementById('big-slider');
  let bigSlider;

  function createBigSlider() {
    if(!bigSlider && bigSliderContainer) {
      bigSlider = new Swiper(bigSliderContainer, {
        modules: [Navigation],
        direction: 'horizontal',
        spaceBetween: 35,
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
            spaceBetween: 35,
          },
        },
      });
    }
  }
  createBigSlider();

  function destroyBigSlider() {
    if(bigSlider) {
      bigSlider.destroy(true, true); //destroy(deleteInstance, cleanStyles)
      bigSlider = null;
    }
  }

  function checkWindowSize() {
    if (window.innerWidth < 1920) {
      createBigSlider();
    } else {
      destroyBigSlider();
    }
  }
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize); //Следим за изменением ширины окна
}
