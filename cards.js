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
    if (entries[0].isIntersecting) {
        loadCards();
        observer.unobserve(entries[0].target); // Stop observing once cards are loaded
    }
}, { threshold: 1.0 });

if (scrollEnd) {
    observer.observe(scrollEnd);
}
