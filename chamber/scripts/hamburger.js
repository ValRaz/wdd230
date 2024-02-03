document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation ul');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('open');
            hamButton.classList.remove('open');

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            link.classList.add('active');
        });
    });
});