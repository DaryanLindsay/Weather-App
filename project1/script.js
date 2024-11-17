document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '3125c9e4518d65c8be92dd8eaed83155';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            const weatherData = `
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            document.getElementById('weatherDisplay').innerHTML = weatherData;
        } else {
            document.getElementById('weatherDisplay').innerHTML = `<p>${data.message}</p>`;
        }
        


    })
    .catch(error => {
        document.getElementById('weatherDisplay').innerHTML = `<p>Error fetching data</p>`;
    });
});




