document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');

    let cardWidth = cards[0].offsetWidth;
    let currentPosition = 0;
    let scrollAmount = 2; // Adjust scroll speed if necessary

    // Clone cards function remains the same
    function cloneCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    function scrollCards() {
        currentPosition += scrollAmount;
        wrapper.style.transform = `translateX(-${currentPosition}px)`;

        // Reset position when scrolled past all cards
        if (currentPosition >= cardWidth) {
            currentPosition = 0;
            wrapper.style.transform = `translateX(0)`;
        }

        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
