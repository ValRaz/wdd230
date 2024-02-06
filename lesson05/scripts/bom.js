const inputElement = document.getElementById('favchap');
const addButton = document.querySelector('button');
const listElement = document.getElementById('list');

addButton.Button.addEventListener('click', () => {
    if(inputElement.ariaValueMax.trim() === '') {
        inputElement.focus();
        return;
    }
});