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
<script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
  });