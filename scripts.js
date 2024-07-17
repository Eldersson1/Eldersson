// Modal functionality
var modal = document.getElementById("myModal");
var profilePic = document.getElementById("profilePic");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the profile picture, open the modal
profilePic.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Infinite scrolling cards
const cardWrapper = document.querySelector('.card-wrapper');

function createCard(content) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerText = content;
    return card;
}

function loadCards() {
    for (let i = 0; i < 10; i++) {
        const card = createCard('Card Content ' + (Math.random() * 1000).toFixed(0));
        cardWrapper.appendChild(card);
    }
}

// Initial load
loadCards();

// Load more cards when scrolled to the bottom
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        loadCards();
    }
});
