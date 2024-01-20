document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let yearPlaceholder = document.getElementById('copyrightParagraph');
    if (yearPlaceholder) {
        yearPlaceholder.innerHTML += `${currentYear}`;
    }

    let lastModifiedDate = new Date(document.lastModified);
    let lastModified = document.getElementById('lastModified');
    if (lastModified) {
        lastModified.innerHTML += `Last modified: ${lastModifiedDate.toDateString()}`;
    }
});