document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');

    let cardWidth = cards[0].offsetWidth;
    let currentPosition = 0;

    function cloneCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    function scrollCards() {
        currentPosition++;
        wrapper.style.transform = `translateX(-${currentPosition}px)`;

        // Reset position when scrolled past all cards
        if (currentPosition >= wrapper.scrollWidth - wrapper.offsetWidth) {
            currentPosition = 0;
            wrapper.style.transform = `translateX(0)`;
        }

        requestAnimationFrame(scrollCards);
    }

    cloneCards();
    scrollCards();
});
