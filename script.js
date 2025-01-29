// Modal functionality
const modal = document.getElementById("modal");
const profilePic = document.getElementById("profileImage");
const span = document.getElementsByClassName("close")[0];

if (profilePic) {
    profilePic.onclick = () => {
        modal.style.display = "block";
    };
}

if (span) {
    span.onclick = () => {
        modal.style.display = "none";
    };
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Infinite scrolling functionality
const cardWrapper = document.getElementById('scrollingWrapper');
const scrollEnd = document.getElementById('scroll-end');

const newCards = [
    { image: 'images/mo.png', title: 'Modernly Optimized', description: 'Trying to get 1.21 release!' },
    { image: 'images/skyblock.png', title: 'Hypixel Skyblock', description: 'Soon getting Hyperion!' },
    { image: 'images/yt.png', title: 'Youtube Channel', description: 'Hopefully hit 1k subscribers soon!' },
    { image: 'images/noteblock.png', title: 'Noteblock Studio', description: 'Making my very own noteblock music!' },
    { image: 'images/code.png', title: 'Python coding', description: 'Hopefully soon have my own game!' },
    { image: 'images/fn.jpeg', title: 'Fortnite', description: 'Longest winstreak 10 crowns!' },
    { image: 'images/mc.png', title: 'Minecraft Server', description: 'Trying to make my server idea into reality!' }
];

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
    newCards.forEach(cardData => {
        const card = createCard(cardData.image, cardData.title, cardData.description);
        cardWrapper.appendChild(card);
    });
}

// Intersection Observer to trigger load more cards when scrolling
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadCards();
            observer.unobserve(entry.target); // Stop observing once cards are loaded
        }
    });
}, { threshold: 1.0 });

if (scrollEnd) {
    observer.observe(scrollEnd);
}

// Play/Pause background music functionality
const backgroundMusic = document.getElementById('background-music');
const playButton = document.getElementById('play-button');
const playIcon = document.getElementById('play-icon');
const stopIcon = document.getElementById('stop-icon');

if (playButton) {
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
}

// Initial card loading
loadCards();

document.getElementById("copyButton").addEventListener("click", function() {
    // Text to copy
    const email = "elderssonmc@gmail.com";
  
    // Use the Clipboard API
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });