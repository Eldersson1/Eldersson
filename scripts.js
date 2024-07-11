document.addEventListener("DOMContentLoaded", function() {
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');
    let animation = null;
    
    function startAnimation() {
        animation = scrollingWrapper.animate(
            { transform: 'translateX(-100%)' },
            { duration: 20000, iterations: Infinity }
        );
    }

    function pauseAnimation() {
        if (animation) {
            animation.pause();
        }
    }

    function resumeAnimation() {
        if (animation) {
            animation.play();
        }
    }

    startAnimation();

    // Optional: Pause animation on hover
    scrollingWrapper.addEventListener('mouseenter', pauseAnimation);
    scrollingWrapper.addEventListener('mouseleave', resumeAnimation);
});
