const sSwiper = new Sswiper (".mySwiper", {
  slidesPerView: 3,
  /* grid: {
    rows: 2,
  }, */
  /* spaceBetween: 30, */
  /* pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, */
  navigation: {
    nextEl: '.slider-1-button-next',
    prevEl: '.slider-1-button-prev',
  },
});

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


