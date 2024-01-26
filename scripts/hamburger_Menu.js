document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('nav');

    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.classList.add('hamburger');
    hamburgerBtn.setAttribute('aria-label', 'Menu');
    hamburgerBtn.innerHTML = '<span class="hamburger-icon">&#9776;</span><span class="close-icon">&times;</span>';

    const closeIcon = hamburgerBtn.querySelector('.close-icon');
    closeIcon.style.display = 'none';

    nav.appendChild(hamburgerBtn);

    hamburgerBtn.addEventListener('click', function() {
        const menu = nav.querySelector('ul');
        menu.classList.toggle('show-menu');
    });
});