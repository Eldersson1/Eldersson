const audio = document.getElementById('audio');
        const playIcon = document.getElementById('play-icon');

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
                playIcon.setAttribute('d', 'M6 19h4V5H6zm8-14v14h4V5z');
            } else {
                audio.pause();
                playIcon.setAttribute('d', 'M8 5v14l11-7z');
            }
        }