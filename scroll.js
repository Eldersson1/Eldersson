document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');
    const cardWidth = cards[0].offsetWidth;
    const scrollSpeed = 1; // Adjust scroll speed if necessary
    let currentPosition = 0;

    // Clone cards function remains the same
    function cloneCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    function scrollCards() {
        currentPosition += scrollSpeed;

        // Update the transform property to scroll
        wrapper.style.transform = `translateX(-${currentPosition}px)`;

        // Check if the first card has scrolled completely out of view
        const firstCardRect = cards[0].getBoundingClientRect();
        if (firstCardRect.right < 0) {
            // Move the first card to the end of the wrapper
            wrapper.appendChild(cards[0]);
            // Update currentPosition to adjust for the card moved
            currentPosition += cardWidth;
        }

        // Request animation frame for smooth scrolling
        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
