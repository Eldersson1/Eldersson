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
const audio = document.querySelector('audio');
audio.play();
window.addEventListener('load', function(){
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
});