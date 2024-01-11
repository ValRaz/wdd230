document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let copyrightParagraph = document.getElementById('cpyrightParagraph');
    if (copyyrightParagraph) {
        copyrightParagraph.innerHTML += `${currentYear}`;
    }
});