const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    console.log('Button clicked');
   
    if (input.value !== '') {
        
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(chaptersArray);
        input.value = '';
        input.focus();
    }    
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); 

    li.textContent = item;

    li.appendChild(deleteButton);

    list.appendChild(li);

    deleteButton.addEventListener('click', () => {
        deleteChapter(item, chaptersArray);
        list.removeChild(li);
        input.focus();
    });
}

function getChapterList() {
    const chaptersString = localStorage.getItem('chapters');
    if (chaptersString) {
        return JSON.parse(chaptersString);
    }
    else {
        return [];
    }
}

function setChapterList(chapters) {
    localStorage.setItem('chapters', JSON.stringify(chapters));
}

function deleteChapter(chapter) {
    const formattedChapter = chapter.slice(0,-1);
    const updatedChaptersArray = chaptersArray.filter(item => item !== formattedChapter);
    setChapterList(updatedChaptersArray);
}
