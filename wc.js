function checkWeather() {
    let city = document.getElementById("cityInput").value;
    let weatherResult = document.getElementById("weatherResult");

    if (city.trim() === "") {
        alert("Please enter a city name");
        return;
    }

    weatherResult.textContent = `Fetching weather data for ${city}...`;

    setTimeout(() => {
        weatherResult.textContent = `The weather in ${city} is sunny with a temperature of 25°C.`;
    }, 2000);
}
