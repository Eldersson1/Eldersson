// Modal functionality
var modal = document.getElementById("myModal");
var profilePic = document.getElementById("profilePic");
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

loadCards();

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
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
