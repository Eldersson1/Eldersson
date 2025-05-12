document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('#cool_card');

      cards.forEach(card => {
        card.classList.add('floating-card');
        card.style.setProperty('--random-x', `${Math.random() * 20 - 10}px`);
        card.style.setProperty('--random-y', `${Math.random() * 20 - 10}px`);
      });

      const audio = document.getElementById('audio');
      const playButton = document.querySelector('.play-button');
      const playImages = playButton.querySelectorAll('[data-state^="play"]');
      const pauseImages = playButton.querySelectorAll('[data-state^="pause"]');

      const playHighlightImg = playButton.querySelector('[data-state="play_highlight"]');
      const pauseHighlightImg = playButton.querySelector('[data-state="pause_highlight"]');
      const playUnhighlightImg = playButton.querySelector('[data-state="play_unhighlight"]');
      const pauseUnhighlightImg = playButton.querySelector('[data-state="pause_unhighlight"]');

      let isPlaying = !audio.paused;

      function toggleAudio() {
        if (audio.paused) {
          audio.play();
          isPlaying = true;
          updateIcons();
        } else {
          audio.pause();
          isPlaying = false;
          updateIcons();
        }
      }

      function updateIcons() {
        if (isPlaying) {
          playImages.forEach(img => img.style.display = "none");
          pauseImages.forEach(img => img.style.display = "none");
          pauseUnhighlightImg.style.display = "block";
        } else {
          playImages.forEach(img => img.style.display = "none");
          pauseImages.forEach(img => img.style.display = "none");
          playUnhighlightImg.style.display = "block";
        }
      }

      function handleMouseEnter() {
        if (isPlaying) {
          pauseUnhighlightImg.style.display = "none";
          pauseHighlightImg.style.display = "block";
        } else {
          playUnhighlightImg.style.display = "none";
          playHighlightImg.style.display = "block";
        }
      }

      function handleMouseLeave() {
        updateIcons();
      }

      playButton.addEventListener('click', toggleAudio);
      playButton.addEventListener('mouseenter', handleMouseEnter);
      playButton.addEventListener('mouseleave', handleMouseLeave);

      playButton.style.position = 'fixed';
      playButton.style.bottom = '20px';
      playButton.style.left = '20px';
      playButton.style.zIndex = '1000';

      audio.onended = function() {
        isPlaying = false;
        updateIcons();
      }

      updateIcons();
    });