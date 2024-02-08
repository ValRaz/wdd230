const inputElement = document.getElementById('favchap');
const addButton = document.querySelector('button');
const listElement = document.getElementById('list');

addButton.addEventListener('click', () => {
    if(inputElement.value.trim() === '') {
        inputElement.focus();
        return;
    }

    const li = document.createElement('li');

    li.textContent = inputElement.value.trim();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.appendChild(deleteButton);

    listElement.appendChild(li);

    inputElement.value = '';

    inputElement.focus();

    deleteButton.addEventListener('click', () => {
        listElement.removeChild(li);
    });
});
