document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector('.scrolling-wrapper');
    const cards = document.querySelectorAll('.scrolling-wrapper .card');

    let currentPosition = 0;

    function cloneCards() {
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            wrapper.appendChild(clone);
        });
    }

    function scrollCards() {
        currentPosition += 1;
        if (currentPosition >= wrapper.scrollWidth / 2) {
            currentPosition = 0;
        }
        wrapper.style.transform = `translateX(-${currentPosition}px)`;
        requestAnimationFrame(scrollCards);
    }

    function checkPosition() {
        const firstCard = wrapper.firstElementChild;
        const lastCard = wrapper.lastElementChild;
        const wrapperRect = wrapper.getBoundingClientRect();
        const firstCardRect = firstCard.getBoundingClientRect();
        const lastCardRect = lastCard.getBoundingClientRect();

        if (lastCardRect.right < wrapperRect.left) {
            wrapper.appendChild(firstCard);
            wrapper.style.transition = 'none';
            wrapper.style.transform = `translateX(${firstCardRect.width}px)`;
            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s linear';
                wrapper.style.transform = `translateX(0)`;
            }, 50);
        }
    }

    cloneCards();
    scrollCards();
    setInterval(checkPosition, 100);
});
