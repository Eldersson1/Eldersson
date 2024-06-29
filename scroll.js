document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');
    const cardWidth = cards[0].offsetWidth;
    const scrollAmount = 2; // Adjust scroll speed if necessary

    // Clone cards function remains the same
    function cloneCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    function scrollCards() {
        // Calculate the viewport dimensions
        const viewportWidth = window.innerWidth;
        const wrapperRect = wrapper.getBoundingClientRect();

        // Loop through each card to check its position
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();

            // Check if the right edge of the card is outside the viewport
            if (cardRect.right < wrapperRect.left + cardWidth) {
                // Calculate the teleport position to the right
                const teleportPosition = currentPosition + viewportWidth;

                // Teleport the card to the right
                currentPosition += cardWidth; // Adjust teleport distance
                wrapper.style.transform = `translateX(-${teleportPosition}px)`;
                wrapper.appendChild(card); // Move the card to the end of wrapper
            }
        });

        // Increment the current position for continuous scrolling
        currentPosition += scrollAmount;
        wrapper.style.transform = `translateX(-${currentPosition}px)`;

        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
