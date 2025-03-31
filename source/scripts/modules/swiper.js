import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

let bigSlider = null;

export function initSwiper() {
  const breakpoint = window.matchMedia('(min-width: 1920px)');

  const enableSwiper = () => {
    bigSlider = new Swiper('#big-slider', {
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
  };

  const checkBreakpoint = () => {
    if (breakpoint.matches) {
      if (bigSlider) {
        bigSlider.destroy(true, true);
        bigSlider = null;
      }
    } else {
      if (!bigSlider) {
        enableSwiper();
      }
    }
  };

  // слушаем изменение ширины экрана
  breakpoint.addEventListener('change', checkBreakpoint);
  checkBreakpoint(); // проверка при загрузке
}


/* import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export function initSwiper() {
  new Swiper('#big-slider', {
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
        spaceBetween: 35,
      },
    },
  });
} */


