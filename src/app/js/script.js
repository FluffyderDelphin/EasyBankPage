const hamBtn = document.querySelector('#btn-ham');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hiddenElements = document.querySelectorAll('.hideable');

// Enabling show and hide Funtionality for the Mobile Menu
hamBtn.addEventListener('click', () => {
  console.log('Hamburger clicked');
  if (header.classList.contains('open')) {
    hiddenElements.forEach((e) => {
      e.classList.remove('fade-in');
      e.classList.add('fade-out');
    });

    setTimeout(() => {
      header.classList.remove('open');
      hiddenElements.forEach((e) => {
        e.classList.add('hidden');
      });
    }, 300);
  } else {
    header.classList.add('open');

    hiddenElements.forEach((e) => {
      e.classList.remove('hidden');
      e.classList.add('fade-in');
      e.classList.remove('fade-out');
    });
  }
});
