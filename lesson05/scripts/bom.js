const inputElement = document.getElementById('favchap');
const addButton = document.querySelector('button');
const listElement = document.getElementById('list');

addButton.Button.addEventListener('click', () => {
    if(inputElement.value.trim() === '') {
        inputElement.focus();
        return;
    }
});

const li = document.createElement('li');
listElement.appendChild(li);
li.textContent = inputElement.value.trim();

const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';
deleteButton.classList.add('delete');

li.append(deleteButton);

document.getElementById('list').appendChild(li);

deleteButton.addEventListener('click', () => {
    ul.removeChilde(li);
});
