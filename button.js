// Play/Pause background music functionality
const backgroundMusic = document.getElementById('background-music');
const playButton = document.getElementById('play-button');
const playIcon = document.getElementById('play-icon');
const stopIcon = document.getElementById('stop-icon');

if (playButton) {
    playButton.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            playIcon.style.display = 'none';
            stopIcon.style.display = 'block';
        } else {
            backgroundMusic.pause();
            playIcon.style.display = 'block';
            stopIcon.style.display = 'none';
        }
    });
}

// Initial card loading
loadCards();
