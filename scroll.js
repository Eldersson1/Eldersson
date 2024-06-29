document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');
    const cardWidth = cards[0].offsetWidth;
    const teleportDistance = 200; // Adjust teleport distance as needed
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

        // Check if scrolled past the width of one card
        if (currentPosition >= cardWidth + teleportDistance) {
            currentPosition -= cardWidth;
            wrapper.appendChild(wrapper.firstElementChild); // Move the first card to the end
        }

        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
