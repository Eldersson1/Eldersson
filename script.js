document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const iconPath = document.getElementById('icon-path');

    function toggleAudio() {
        if (audio.paused) {
            audio.play();
            iconPath.setAttribute('d', 'M6 19h4V5H6zm8-14v14h4V5z');
        } else {
            audio.pause();
            iconPath.setAttribute('d', 'M8 5v14l11-7z');
        }
    }

    window.toggleAudio = toggleAudio; // Ensure toggleAudio is globally accessible

    audio.onended = function() {
        iconPath.setAttribute('d', 'M8 5v14l11-7z');
    }
});