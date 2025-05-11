document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.querySelector('.play-button');
    const playImages = playButton.querySelectorAll('[data-state^="play"]');
    const pauseImages = playButton.querySelectorAll('[data-state^="pause"]');

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            showPauseIcons();
        } else {
            audio.pause();
            showPlayIcons();
        }
    }

    function showPlayIcons() {
        playImages.forEach(img => img.style.display = "block");
        pauseImages.forEach(img => img.style.display = "none");
    }

    function showPauseIcons() {
        playImages.forEach(img => img.style.display = "none");
        pauseImages.forEach(img => img.style.display = "block");
    }

    window.toggleAudio = toggleAudio;

    audio.onended = function() {
        showPlayIcons();
    }

    showPlayIcons(); // Set initial state
});