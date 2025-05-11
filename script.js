document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.querySelector('.play-button');
    const playImages = playButton.querySelectorAll('[data-state^="play"]');
    const pauseImages = playButton.querySelectorAll('[data-state^="pause"]');

    // For hover logic
    const playHighlightImg = playButton.querySelector('[data-state="play_highlight"]');
    const pauseHighlightImg = playButton.querySelector('[data-state="pause_highlight"]');
    const playUnhighlightImg = playButton.querySelector('[data-state="play_unhighlight"]');
    const pauseUnhighlightImg = playButton.querySelector('[data-state="pause_unhighlight"]');

    // Track the current audio state
    let isPlaying = audio.paused ? false : true;

    // Function to toggle audio play/pause
    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            isPlaying = true;
            showPauseIcons();
        } else {
            audio.pause();
            isPlaying = false;
            showPlayIcons();
        }
    }

    // Show play icons (when the audio is paused or when the page loads)
    function showPlayIcons() {
        playImages.forEach(img => img.style.display = "none");  // Hide all play-related icons
        pauseImages.forEach(img => img.style.display = "none"); // Hide all pause-related icons
        playUnhighlightImg.style.display = "block";            // Show play unhighlighted
        playHighlightImg.style.display = "none";                // Hide play highlighted
        pauseUnhighlightImg.style.display = "none";            // Hide pause unhighlighted
        pauseHighlightImg.style.display = "none";              // Hide pause highlighted
    }

    // Show pause icons (when the audio is playing)
    function showPauseIcons() {
        playImages.forEach(img => img.style.display = "none");  // Hide all play-related icons
        pauseImages.forEach(img => img.style.display = "none"); // Hide all pause-related icons
        playUnhighlightImg.style.display = "none";             // Hide play unhighlighted
        playHighlightImg.style.display = "none";               // Hide play highlighted
        pauseUnhighlightImg.style.display = "none";            // Hide pause unhighlighted
        pauseHighlightImg.style.display = "block";             // Show pause highlighted
    }

    // Mouse enter and leave handlers for hover effect
    function handleMouseEnter() {
        if (!isPlaying) {
            playHighlightImg.style.display = "block";  // Show play highlighted when audio is paused
            pauseHighlightImg.style.display = "none"; // Hide pause highlighted
        } else {
            playHighlightImg.style.display = "none";  // Hide play highlighted when audio is playing
            pauseHighlightImg.style.display = "block"; // Show pause highlighted
        }
    }

    function handleMouseLeave() {
        if (!isPlaying) {
            playHighlightImg.style.display = "none";  // Hide play highlighted when not hovered
            pauseHighlightImg.style.display = "none"; // Hide pause highlighted when not hovered
            playUnhighlightImg.style.display = "block"; // Show play unhighlighted by default
        } else {
            playHighlightImg.style.display = "none";  // Hide play highlighted when not hovered
            pauseHighlightImg.style.display = "none"; // Hide pause highlighted when not hovered
            pauseUnhighlightImg.style.display = "block"; // Show pause unhighlighted by default
        }
    }

    // Event listeners for hover
    playButton.addEventListener('mouseenter', handleMouseEnter);
    playButton.addEventListener('mouseleave', handleMouseLeave);

    window.toggleAudio = toggleAudio;

    audio.onended = function() {
        isPlaying = false;
        showPlayIcons(); // Show play icons when the audio ends
    }

    // Set initial state based on whether the audio is playing or paused
    if (audio.paused) {
        showPlayIcons();  // Show play icons initially
    } else {
        showPauseIcons(); // Show pause icons if audio is already playing
    }
});
