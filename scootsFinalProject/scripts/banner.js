const urlMax = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.96&appid=b29d059d0ae9fd5dbb73739f2a72b55e&units=imperial';


async function apiFetch() {
    try {
        const responseMax = await fetch(urlMax);
        console.log('Response status:', responseMax.status); // Log response status
        if (responseMax.ok) {
            const dataMax = await responseMax.json();
            console.log(dataMax); // testing only
            displayCurrentResultsMax(dataMax);
        } else {
            throw new Error(await responseMax.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayCurrentResultsMax(dataMax) {
    const tempMax = dataMax.main.temp_max;
    const banner = document.getElementById('banner');
    const temperatureHeading = banner.querySelector('h1');

    temperatureHeading.textContent = `Today's High Temperature: ${tempMax} °F`;
    banner.style.display = 'block';
}

document.getElementById('dismiss-banner').addEventListener('click', function() {
    document.getElementById('banner').style.display = 'none';
});

apiFetch();
