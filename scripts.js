document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');

    // Function to handle animation reset
    function handleAnimationEnd() {
        const firstCard = scrollingWrapper.firstElementChild;
        scrollingWrapper.appendChild(firstCard);
        firstCard.style.animation = 'none';
        setTimeout(() => {
            firstCard.style.animation = 'slide-left 20s linear infinite';
        }, 100); // Delay to restart animation to avoid flicker
    }

    // Add event listener to each card for animation end
    cards.forEach(card => {
        card.addEventListener('animationiteration', handleAnimationEnd);
    });
});
