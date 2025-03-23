export const openDetails = () => {
  const details = document.querySelectorAll('.footer details');
  if(window.innerWidth >= 1024) {
    details.forEach((el) => {
      el.setAttribute('open', '');
    });
  } else {
    details.forEach((el) => {
      el.removeAttribute('open');
    });
  }
};
