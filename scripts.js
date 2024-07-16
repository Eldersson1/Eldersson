document.addEventListener("DOMContentLoaded", () => {
    const scrollingWrapper = document.getElementById("scrollingWrapper");
    const cards = Array.from(scrollingWrapper.children);
    
    // Clone the initial set of cards and append them to the wrapper
    cards.forEach(card => scrollingWrapper.appendChild(card.cloneNode(true)));
    
    let scrollSpeed = 1; // Adjust this value to control the speed of scrolling
    
    // Smooth scrolling effect
    function smoothScroll() {
        scrollingWrapper.scrollLeft += scrollSpeed;
        if (scrollingWrapper.scrollLeft >= scrollingWrapper.scrollWidth / 2) {
            scrollingWrapper.scrollLeft = 0;
        }
        requestAnimationFrame(smoothScroll);
    }
    
    smoothScroll();

    const profileImage = document.getElementById('profileImage');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const closeButton = document.querySelector('.close');
    const playButton = document.getElementById('play-button');
    const backgroundMusic = document.getElementById('background-music');
    const playIcon = document.getElementById('play-icon');
    const stopIcon = document.getElementById('stop-icon');

    profileImage.addEventListener('click', () => {
        videoModal.style.display = 'block';
        videoPlayer.setAttribute('aria-hidden', 'false');
    });

    closeButton.addEventListener('click', () => {
        videoModal.style.display = 'none';
        videoPlayer.setAttribute('aria-hidden', 'true');
        videoPlayer.src = videoPlayer.src; // Stop the video
    });

    window.addEventListener('click', (event) => {
        if (event.target == videoModal) {
            videoModal.style.display = 'none';
            videoPlayer.setAttribute('aria-hidden', 'true');
            videoPlayer.src = videoPlayer.src; // Stop the video
        }
    });

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
});
