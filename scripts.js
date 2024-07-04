// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');
    var playIcon = document.getElementById('play-icon');
    var stopIcon = document.getElementById('stop-icon');
    var profileImage = document.getElementById('profileImage');
    var videoModal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    var closeModal = document.querySelector('.close');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().then(function() {
                playIcon.style.display = 'none';
                stopIcon.style.display = 'block';
            }).catch(function(error) {
                console.error("Error playing the music: ", error);
            });
        } else {
            audio.pause();
            playIcon.style.display = 'block';
            stopIcon.style.display = 'none';
        }
    });

    profileImage.addEventListener('click', function() {
        videoModal.style.display = 'block';
        videoPlayer.src += "?autoplay=1";
    });

    closeModal.addEventListener('click', function() {
        videoModal.style.display = 'none';
        videoPlayer.src = videoPlayer.src.replace("?autoplay=1", "");
    });

    window.addEventListener('click', function(event) {
        if (event.target == videoModal) {
            videoModal.style.display = 'none';
            videoPlayer.src = videoPlayer.src.replace("?autoplay=1", "");
        }
    });

    document.addEventListener('keydown', function(evt) {
        if (evt.key === "Escape") {
            videoModal.style.display = 'none';
            videoPlayer.src = videoPlayer.src.replace("?autoplay=1", "");
        }
    });
});
function showCards() {
    const cards = document.querySelectorAll('.card');
    let index = 0;

    function revealCard() {
        if (index < cards.length) {
            if (index % 2 === 0) {
                cards[index].classList.remove('hidden');
                cards[index].style.opacity = '1';
            }
            index++;
            setTimeout(revealCard, 1000); // Reveal every second card every second
        } else {
            // Reset index to create an infinite loop
            index = 0;
            setTimeout(revealCard, 1000);
        }
    }

    revealCard();
}
