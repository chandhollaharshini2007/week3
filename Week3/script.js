
async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = AQ.Ab8RN6JreskgCV2g4cvy-lW5ydG0CSAFE4vyfdybYxbistGt7w;

    if (city.trim() === "") {
        document.getElementById("error").innerText =
            "Please enter a city name";
        return;
    }

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        document.getElementById("error").innerText =
            "Loading...";

        const response = await fetch(url);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "City not found");
        }

        // Display weather information
        document.getElementById("cityName").innerText =
            data.name;

        document.getElementById("temperature").innerText =
            data.main.temp + " °C";

        document.getElementById("condition").innerText =
            data.weather[0].description;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("error").innerText = "";

    } catch (error) {
        document.getElementById("error").innerText =
            error.message;
    }
}
