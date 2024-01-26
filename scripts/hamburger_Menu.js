document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('nav');

    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.classList.add('hamburger');
    hamburgerBtn.setAttribute('aria-label', 'Menu');
    hamburgerBtn.innerHTML = '<span class="hamburger-icon">&#9776;</span><span class="close-icon">&times;</span>';

    const closeIcon = hamburgerBtn.querySelector('.close-icon');
    closeIcon.style.display = 'none';

    nav.appendChild(hamburgerBtn);

    const dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('dropdown-menu');
    
    const clonedNav = nav.querySelector('ul').cloneNode(true);
    dropdownMenu.appendChild(clonedNav);

    document.body.appendChild(dropdownMenu);

    hamburgerBtn.addEventListener('click', function() {
        const menu = document.querySelector('nav ul');
        menu.classList.toggle('show-menu');
        dropdownMenu.classList.toggle('show-menu');
        if (dropdownMenu.classList.contains('show-menu')) {
            closeIcon.style.display = 'block';
        } else {
            closeIcon.style.display = 'none';
        }
    });
});