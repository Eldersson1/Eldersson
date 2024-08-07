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
const scrollEnd = document.getElementById('scroll-end');

function createCard(image, title, description) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const projectImage = document.createElement('div');
    projectImage.className = 'project-image';
    projectImage.style.backgroundImage = `url('${image}')`;
    card.appendChild(projectImage);
    
    const projectInfo = document.createElement('div');
    projectInfo.className = 'project-info';
    
    const projectTitle = document.createElement('h2');
    projectTitle.innerText = title;
    projectInfo.appendChild(projectTitle);
    
    const projectDescription = document.createElement('p');
    projectDescription.innerText = description;
    projectInfo.appendChild(projectDescription);
    
    card.appendChild(projectInfo);
    
    return card;
}

function loadCards() {
    const newCards = [
        { image: 'images/mo.png', title: 'Modernly Optimized', description: 'Trying to get 1.21 release!' },
        { image: 'images/skyblock.png', title: 'Hypixel Skyblock', description: 'Soon getting Hyperion!' },
        { image: 'images/yt.png', title: 'Youtube Channel', description: 'Hopefully hit 1k subscribers soon!' },
        { image: 'images/noteblock.png', title: 'Noteblock Studio', description: 'Making my very own noteblock music!' },
        { image: 'images/code.png', title: 'Python coding', description: 'Hopefully soon have my own game!' },
        { image: 'images/fn.jpeg', title: 'Fortnite', description: 'Longest winstreak 10 crowns!' },
        { image: 'images/mc.png', title: 'Minecraft Server', description: 'Trying to make my server idea into reality!' }
    ];

    newCards.forEach(cardData => {
        const card = createCard(cardData.image, cardData.title, cardData.description);
        cardWrapper.insertBefore(card, scrollEnd);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadCards();
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
});

observer.observe(scrollEnd);

// Download functionality
document.getElementById('downloadButton').addEventListener('click', function() {
    window.location.href = 'others/Eldersson.zip';
});

// Play/pause background music
const playButton = document.getElementById('play-button');
const backgroundMusic = document.getElementById('background-music');
const playIcon = document.getElementById('play-icon');
const stopIcon = document.getElementById('stop-icon');

playButton.addEventListener('click', function() {
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
