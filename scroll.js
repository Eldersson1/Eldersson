document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');
    const cardWidth = cards[0].offsetWidth;
    let currentPosition = 0;
    const scrollAmount = 2; // Adjust scroll speed if necessary

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

        // Get viewport dimensions
        const viewportWidth = window.innerWidth;

        // Get the bounding rectangle of the last card
        const lastCardRect = cards[cards.length - 1].getBoundingClientRect();

        // Check if the right edge of the last card is outside the viewport
        if (lastCardRect.right < 0) {
            currentPosition += cardWidth; // Teleport distance
            wrapper.style.transform = `translateX(-${currentPosition}px)`;
            wrapper.appendChild(wrapper.firstElementChild); // Move the first card to the end
        }

        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
