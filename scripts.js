document.addEventListener("DOMContentLoaded", () => {
    const scrollingWrapper = document.getElementById("scrollingWrapper");
    const cards = Array.from(scrollingWrapper.children);

    function appendCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            scrollingWrapper.appendChild(clone);
        });
    }

    scrollingWrapper.addEventListener('scroll', () => {
        if (scrollingWrapper.scrollLeft + scrollingWrapper.clientWidth >= scrollingWrapper.scrollWidth - 5) {
            appendCards();
        }
    });
});

    // Uncomment the following lines to create an infinite loop
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             for (let i = 0; i < numberOfCards; i++) {
    //                 const cardClone = cards[i].cloneNode(true);
    //                 projectContainer.appendChild(cardClone);
    //             }
    //         }
    //     });
    // });

    // observer.observe(projectContainer.lastElementChild);
