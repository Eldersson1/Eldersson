let carousel = document.querySelector('.carousel');
setInterval(() => {
  if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollBy({ left: 100, behavior: 'smooth' });
  }
}, 2000);