document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById('background-music');
  var playButton = document.getElementById('play-button');

  playButton.addEventListener('click', function() {
      audio.play().then(function() {
          console.log("Music is playing.");
          playButton.style.display = 'none'; // Hide the button after the music starts
      }).catch(function(error) {
          console.log("Error playing the music: ", error);
      });
  });
});
