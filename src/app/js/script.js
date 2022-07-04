const hamBtn = document.querySelector('#btn-ham');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

hamBtn.addEventListener('click', () => {
  console.log('Hamburger clicked');
  if (header.classList.contains('open')) {
    setTimeout(() => {
      header.classList.remove('open');
    }, 300);

    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
  } else {
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
  }
});
