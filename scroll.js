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
        currentPosition++;

        // Update the transform property to scroll
        wrapper.style.transform = `translateX(-${currentPosition}px)`;

        // Check if any card has completely scrolled out of view on the left
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            if (cardRect.right < 0) {
                // Calculate the teleport position to the right
                const teleportPosition = currentPosition + wrapper.offsetWidth;
                
                // Teleport the card to the right
                currentPosition += cardWidth; // Adjust teleport distance
                wrapper.style.transform = `translateX(-${teleportPosition}px)`;
                wrapper.appendChild(card); // Move the card to the end of wrapper
            }
        });

        // Request animation frame for smooth scrolling
        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
