document.addEventListener("DOMContentLoaded", function() {
    const projectContainer = document.getElementById('project-container');
    const cards = projectContainer.children;
    const numberOfCards = cards.length;

    for (let i = 0; i < numberOfCards; i++) {
        const cardClone = cards[i].cloneNode(true);
        projectContainer.appendChild(cardClone);
    }

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
});
