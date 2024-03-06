const baseURL = "https://valraz.github.io/wdd230/";
const linksURL = "https://valraz.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
}

getLinks();

function displayLinks(lessons) {
    const linksList = document.getElementById('links');

    lessons.forEach(lesson => {
        const weekId = `week-${lesson.lesson}`;
        const weekElement = document.createElement('li');
        weekElement.setAttribute('id', weekId);

        weekElement.textContent = `Week ${lesson.lesson}`;

        lesson.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', link.url);
            linkElement.textContent = link.title;

            const listItem = document.createElement('li');
            listItem.appendChild(linkElement);

            weekElement.appendChild(listItem);
        });

        linksList.appendChild(weekElement);
    });
}