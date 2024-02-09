const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); 

button.addEventListener('click', () => {
   
    if (input.value.trim() !== '') {
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete'); 

        li.textContent = input.value;

        li.appendChild(deleteButton);

        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';

        input.focus();
    } else {
        input.focus();
    }
});
