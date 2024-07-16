document.addEventListener("DOMContentLoaded", () => {
    const scrollingWrapper = document.getElementById("scrollingWrapper");
    const cards = Array.from(scrollingWrapper.children);

    // Clone initial cards to create a seamless scroll
    function createSeamlessScroll() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            scrollingWrapper.appendChild(clone);
        });
    }

    // Adjust scroll position to create infinite scroll effect
    function adjustScroll() {
        if (scrollingWrapper.scrollLeft >= scrollingWrapper.scrollWidth / 2) {
            scrollingWrapper.scrollLeft -= scrollingWrapper.scrollWidth / 2;
        }
    }

    createSeamlessScroll();
    scrollingWrapper.addEventListener('scroll', adjustScroll);
});