document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem('visits')) {
        let visits = parseInt(localStorage.getItem('visits'));
        visits++;
        localStorage.setItem('visits', visits);
        updateVisitCounter(visits);
    } else {
        localStorage.setItem('visits', 1);
        updateVisitCounter(1);
    }
});

function updateVisitCounter(visits) {
    let trafficParagraph = document.querySelector('.traffic p');
    if(trafficParagraph) {
        trafficParagraph.textContent = `Total Visits: ${visits}`;
    }
}