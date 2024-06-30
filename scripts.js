document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById('background-music');
  audio.play().catch(function(error) {
      console.log("Autoplay prevented. Waiting for user interaction to start the music.");
  });
});
