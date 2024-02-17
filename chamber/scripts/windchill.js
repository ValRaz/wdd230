function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3.0) {
        var windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill) + " °F";
    } else {
        return "N/A";
    }
}

function updateWeather() {
    var currentTemperature = parseFloat(document.getElementById("currentTemperature").textContent);
    var currentWindSpeed = parseFloat(document.getElementById("currentWindSpeed").textContent);

    var windChill = calculateWindChill(currentTemperature, currentWindSpeed);

    document.getElementById("windChill").textContent = windChill;
}

window.onload = function() {
    updateWeather();
};