export const openBurgerMenu = () => {
  const toggle = document.getElementById('burger-btn');
  const navigation = document.querySelector('.navigation');

  toggle.addEventListener('click', () => {
    navigation.classList.toggle('navigation--closed');
    navigation.classList.toggle('navigation--opened');
  });
};
