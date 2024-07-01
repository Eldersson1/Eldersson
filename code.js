// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    var profileImage = document.getElementById('profileImage');
    var videoModal = document.getElementById('videoModal');
    var videoPlayer = document.getElementById('videoPlayer');
    var closeModal = document.querySelector('.close');
    var body = document.querySelector('body');

    profileImage.addEventListener('click', function() {
        videoModal.style.display = 'block';
        body.classList.add('blur');
        videoPlayer.src = "https://www.youtube.com/embed/SEjlfFNIo_g";
    });

    closeModal.addEventListener('click', function() {
        videoModal.style.display = 'none';
        body.classList.remove('blur');
        videoPlayer.src = ""; // Reset video source to stop playback
    });

    // Close the modal if user clicks outside the video content
    window.onclick = function(event) {
        if (event.target == videoModal) {
            videoModal.style.display = 'none';
            body.classList.remove('blur');
            videoPlayer.src = ""; // Reset video source to stop playback
        }
    };

    // Close the modal if user presses Escape key
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.key === "Escape") {
            videoModal.style.display = 'none';
            body.classList.remove('blur');
            videoPlayer.src = ""; // Reset video source to stop playback
        }
    };
});
