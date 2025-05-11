document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.querySelector('.play-button');
    const playImages = playButton.querySelectorAll('[data-state^="play"]');
    const pauseImages = playButton.querySelectorAll('[data-state^="pause"]');

    // Hovered states
    const playHighlightImg = playButton.querySelector('[data-state="play_highlight"]');
    const pauseHighlightImg = playButton.querySelector('[data-state="pause_highlight"]');
    const playUnhighlightImg = playButton.querySelector('[data-state="play_unhighlight"]');
    const pauseUnhighlightImg = playButton.querySelector('[data-state="pause_unhighlight"]');

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

    // Mouse enter and leave handlers for hover effect
    function handleMouseEnter() {
        playHighlightImg.style.display = "block";
        pauseHighlightImg.style.display = "block";
        playUnhighlightImg.style.display = "none";
        pauseUnhighlightImg.style.display = "none";
    }

    function handleMouseLeave() {
        playHighlightImg.style.display = "none";
        pauseHighlightImg.style.display = "none";
        playUnhighlightImg.style.display = "block";
        pauseUnhighlightImg.style.display = "block";
    }

    // Event listeners for hover
    playButton.addEventListener('mouseenter', handleMouseEnter);
    playButton.addEventListener('mouseleave', handleMouseLeave);

    window.toggleAudio = toggleAudio;

    audio.onended = function() {
        showPlayIcons();
    }

    showPlayIcons(); // Set initial state
});
