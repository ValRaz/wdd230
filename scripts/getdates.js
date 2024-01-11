document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let copyrightParagraph = document.getElementById('cpyrightParagraph');
    if (copyrightParagraph) {
        copyrightParagraph.innerHTML += `${currentYear}`;
    }
});