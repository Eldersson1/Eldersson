// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById('background-music');
    var playButton = document.getElementById('play-button');
    var playIcon = document.getElementById('play-icon');
    var stopIcon = document.getElementById('stop-icon');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().then(function() {
                console.log("Music is playing.");
                playIcon.style.display = 'none';
                stopIcon.style.display = 'block';
            }).catch(function(error) {
                console.log("Error playing the music: ", error);
            });
        } else {
            audio.pause();
            console.log("Music is paused.");
            playIcon.style.display = 'block';
            stopIcon.style.display = 'none';
        }
    });

    // Modal functionality
    var modal = document.getElementById("videoModal");
    var img = document.getElementById("profileImage");
    var span = document.getElementsByClassName("close")[0];
    var body = document.querySelector("body");
    var videoPlayer = document.getElementById("videoPlayer");

    img.onclick = function() {
        modal.style.display = "block";
        videoPlayer.src += "?autoplay=1"; // Add autoplay parameter to URL
    }

    span.onclick = function() {
        modal.style.display = "none";
        videoPlayer.src = videoPlayer.src.replace("?autoplay=1", ""); // Remove autoplay parameter
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            videoPlayer.src = videoPlayer.src.replace("?autoplay=1", ""); // Remove autoplay parameter
        }
    }
});
