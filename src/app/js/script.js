const hamBtn = document.querySelector('#btn-ham');
const header = document.querySelector('#header');

hamBtn.addEventListener('click', () => {
  console.log('Hamburger clicked');
  header.classList.toggle('open');
});
