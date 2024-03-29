const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.96&appid=b29d059d0ae9fd5dbb73739f2a72b55e&units=imperial';


async function apiFetch() {
    try {
        const response = await fetch(urlCurrent);
        console.log('Response status:', response.status); // Log response status
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayCurrentResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}