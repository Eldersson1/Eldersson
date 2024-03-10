// Ota profiilikuva elementti
var profileImage = document.getElementById('profileImage');

// Lisää hiiren yli -tapahtumakuuntelija
profileImage.addEventListener('mouseover', function() {
    // Muuta CSS-tyyliä animoidaksesi kuvan
    profileImage.style.transform = 'rotate(360deg)';
});
// Lisää hiiren pois -tapahtumakuuntelija
profileImage.addEventListener('mouseout', function() {
    // Palauta CSS-tyyli alkuperäiseksi
    profileImage.style.transform = 'rotate(0deg)';
});
let carousel = document.querySelector('.carousel');
setInterval(() => {
  carousel.scrollBy({ left: 100, behavior: 'smooth' });
}, 2000);