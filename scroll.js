document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');
    const cardWidth = cards[0].offsetWidth;
    let currentPosition = 0;

    // Clone cards function remains the same
    function cloneCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    function scrollCards() {
        currentPosition--;

        // Update the transform property to scroll left
        wrapper.style.transform = `translateX(-${currentPosition}px)`;

        // Check if any card is completely out of view on the right
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            if (cardRect.left > wrapper.offsetWidth) {
                // Calculate the teleport position to the left
                const teleportPosition = currentPosition - cardWidth;
                
                // Teleport the card to the left
                currentPosition -= cardWidth; // Adjust teleport distance
                wrapper.style.transform = `translateX(-${teleportPosition}px)`;
                wrapper.insertBefore(card, wrapper.firstElementChild); // Move the card to the beginning of wrapper
            }
        });

        // Check if currentPosition is less than or equal to negative total width of cards
        if (currentPosition <= -wrapper.scrollWidth) {
            currentPosition = 0;
        }

        // Request animation frame for smooth scrolling
        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
