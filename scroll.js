document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');
    const cardWidth = cards[0].offsetWidth;
    const wrapperWidth = wrapper.offsetWidth;
    let currentPosition = 0;

    // Clone cards function remains the same
    function cloneCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    function scrollCards() {
        currentPosition++;

        // Update the transform property to scroll right
        wrapper.style.transform = `translateX(${currentPosition}px)`;

        // Check if any card is completely out of view on the left
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            if (cardRect.right < 0) {
                // Reset the card's position to the right of the visible area
                const newPosition = cardRect.right + wrapperWidth + cardWidth;
                card.style.transform = `translateX(${newPosition}px)`;
            }
        });

        // Request animation frame for smooth scrolling
        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
