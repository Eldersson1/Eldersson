window.onload = function() {
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    let currentPosition = 0;

    function cloneCards() {
        cards.forEach(card => {
            let clone = card.cloneNode(true);
            cardsContainer.appendChild(clone);
        });
    }

    function scrollCards() {
        currentPosition += 1;
        if (currentPosition >= cardsContainer.scrollWidth / 2) {
            currentPosition = 0;
        }
        cardsContainer.style.transform = `translateX(-${currentPosition}px)`;
        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
};
