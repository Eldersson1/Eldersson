document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');
    var playIcon = document.getElementById('play-icon');
    var stopIcon = document.getElementById('stop-icon');
    var profileImage = document.getElementById('profileImage');
    var videoModal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    var closeModal = document.querySelector('.close');
    var scrollingWrapper = document.querySelector('.scrolling-wrapper');
    var cards = document.querySelectorAll('.scrolling-wrapper .card');

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

    // Infinite scroll logic
    scrollingWrapper.addEventListener('scroll', function() {
        if (scrollingWrapper.scrollLeft + scrollingWrapper.clientWidth >= scrollingWrapper.scrollWidth - 1) {
            scrollingWrapper.appendChild(cards[0]);
            scrollingWrapper.scrollLeft -= cards[0].offsetWidth;
        }
    });

    function moveFirstCardToEnd() {
        scrollingWrapper.appendChild(cards[0]);
        cards = document.querySelectorAll('.scrolling-wrapper .card');
    }

    setInterval(moveFirstCardToEnd, 3000); // Move the first card to the end every 3 seconds
});
