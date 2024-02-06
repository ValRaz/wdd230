document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
    });

    const navLinks = document.querySelectorAll('.navigation ul li');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
        });
    });
});