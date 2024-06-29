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

        // Check if any card has completely scrolled out of view on the left
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            if (cardRect.right < 0) {
                // Move the card to the end of the wrapper
                wrapper.appendChild(card);
                // Adjust currentPosition for the card moved
                currentPosition += cardWidth;
            }
        });

        // Request animation frame for smooth scrolling
        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
