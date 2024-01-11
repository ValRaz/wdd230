document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let copyrightParagraph = document.getElementById('copyrightParagraph');
    if (copyrightParagraph) {
        copyrightParagraph.innerHTML += `${currentYear}`;
    }
});