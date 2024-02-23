document.addEventListener("DOMContentLoaded", function() {
    var currentDate = new Date();
    var lastVisit = localStorage.getItem("lastVisit");
    
    if (lastVisit === null) {
        document.querySelector(".visits h3").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        lastVisit = new Date(lastVisit);
        var difference = currentDate - lastVisit;
        var daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        if (daysDifference === 0) {
            document.querySelector(".visits h3").textContent = "Back so soon! Awesome!";
        } else {
            var message = "You last visited ";
            message += daysDifference + " " + (daysDifference === 1 ? "day" : "days") + " ago.";
            document.querySelector(".visits h3").textContent = message;
        }
    }
    
    localStorage.setItem("lastVisit", currentDate);
});