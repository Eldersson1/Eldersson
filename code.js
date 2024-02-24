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
document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('audioPlayer').play();