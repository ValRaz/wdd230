const inputt = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', () => {
    if(input.value != '') {
        input.focus();
        return;
    }

    const li = document.createElement('li');

    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.appendChild(deleteButton);

    list.append(li);

    input.value = '';

    input.focus();

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });
});
