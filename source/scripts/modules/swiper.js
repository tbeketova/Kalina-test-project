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
          prevEl: '.vertical-button-prev',
          nextEl: '.vertical-button-next',
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

export function initGridSwiper() {
  let gridSliderContainer = document.getElementById('grid-slider');
  let gridSlider;

  function createGridSlider() {
    if (!gridSlider && gridSliderContainer) {
      gridSlider = new Swiper(gridSliderContainer, {
        modules: [Navigation],
        direction: 'horizontal',
        spaceBetween: 12,
        navigation: {
          prevEl: '.grid-button-prev',
          nextEl: '.grid-button-next',
        },
        breakpoints: {
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 2, // <== Вот тут 2 строки!
              fill: 'row', // можно еще 'column', но 'row' подходит лучше
            },
          },
          834: {
            slidesPerView: 'auto',
            grid: {
              rows: 1,
            },
          }
        },
      });
    }
  }
  createGridSlider();
}
