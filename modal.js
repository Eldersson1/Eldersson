// Modal functionality
var modal = document.getElementById("modal");
var profilePic = document.getElementById("profileImage");
var span = document.getElementsByClassName("close")[0];

if (profilePic) {
    profilePic.onclick = function() {
        modal.style.display = "block";
    }
}

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
