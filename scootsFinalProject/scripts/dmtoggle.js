document.getElementById('darkModeToggle').addEventListener('input', function() {
    if (this.value == 1) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});