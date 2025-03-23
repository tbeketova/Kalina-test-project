import {openDetails} from './modules/details-open.js';

document.addEventListener('DOMContentLoaded', () => {
  openDetails();

  window.addEventListener('resize', () => {
    openDetails(); // запускаем на каждом изменении ширины окна
  });
});

