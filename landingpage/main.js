const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left') //When the mouse enters that div...we want to add the left class
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left') //When the mouse leaves that div...we want to remove the left class
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right') //When the mouse enters that div...we want to add the right class
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right') //When the mouse leaves that div...we want to remove the right class
});
