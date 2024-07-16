// Infinite scroll
document.querySelector('.scrolling-wrapper').addEventListener('scroll', function() {
    let scrollWidth = this.scrollWidth;
    let scrollLeft = this.scrollLeft;
    let clientWidth = this.clientWidth;

    if (scrollLeft + clientWidth >= scrollWidth - 5) {
        this.scrollLeft = 0;
    }
    if (scrollLeft === 0) {
        this.scrollLeft = scrollWidth - clientWidth;
    }
});

// Modal functionality
let modal = document.getElementById("modal");
let btn = document.querySelectorAll(".card");
let span = document.getElementsByClassName("close")[0];

btn.forEach(card => {
    card.onclick = function() {
        modal.style.display = "block";
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Basic game setup
document.getElementById("startGame").addEventListener("click", function() {
    let canvas = document.getElementById("gameCanvas");
    let context = canvas.getContext("2d");
    
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    let ballRadius = 10;

    function drawBall() {
        context.beginPath();
        context.arc(x, y, ballRadius, 0, Math.PI * 2);
        context.fillStyle = "#007bff";
        context.fill();
        context.closePath();
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        
        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }

        x += dx;
        y += dy;
    }

    setInterval(draw, 10);
});
