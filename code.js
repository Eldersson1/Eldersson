// Ota profiilikuva elementti
var profileImage = document.getElementById('profileImage');

// Lisää hiiren yli -tapahtumakuuntelija
profileImage.addEventListener('mouseover', function() {
    // Muuta CSS-tyyliä animoidaksesi kuvan
    profileImage.style.transform = 'rotate(360deg)';
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Käytä sleep-funktiota
sleep(2000).then(() => {
    // Koodi, joka suoritetaan viiveen jälkeen
});
// Lisää hiiren pois -tapahtumakuuntelija
profileImage.addEventListener('mouseout', function() {
    // Palauta CSS-tyyli alkuperäiseksi
    profileImage.style.transform = 'rotate(0deg)';
});
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
  
