const movingCards = document.querySelector('.moving-cards');
movingCards.addEventListener('mouseover', () => {
    movingCards.style.transition = 'transform 1s';
});

movingCards.addEventListener('mouseout', () => {
    movingCards.style.transition = 'transform 0.3s';
});
