let carousel = document.querySelector('.carousel');
setInterval(() => {
  carousel.scrollBy({ left: 100, behavior: 'smooth' });
}, 2000);