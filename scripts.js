// Modal functionality
var modal = document.getElementById("modal");
var profilePic = document.getElementById("profileImage");
var span = document.getElementsByClassName("close")[0];

profilePic.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Infinite scrolling cards
const cardWrapper = document.getElementById('scrollingWrapper');

function createCard(content) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = content;
    return card;
}

function loadCards() {
    for (let i = 0; i < 5; i++) {
        const card = createCard('Card Content ' + (Math.random() * 1000).toFixed(0));
        cardWrapper.appendChild(card);
    }
}

loadCards();

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        loadCards();
    }
});

// Download functionality
function downloadFile(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Play/Pause background music
const playButton = document.getElementById('play-button');
const backgroundMusic = document.getElementById('background-music');
const playIcon = document.getElementById('play-icon');
const stopIcon = document.getElementById('stop-icon');

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

// Page opacity on load
window.onload = function() {
    document.body.style.opacity = '1';
}
