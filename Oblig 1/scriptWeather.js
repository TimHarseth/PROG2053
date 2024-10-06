$(document).ready(function() {
    let weatherContainer = $('#weatherContainer');

    function fetchRioDeJaneiro() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=-22.9064&longitude=-43.1822&current_weather=true'

        fetch(url)
            .then(response => {
                if (!response.ok) { // Check if the response is successful
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then(data => { // 
                const weather = data.current_weather;
                const weatherText = `
                <div class="weatherCard">
                    <h3>Rio De Janeiro</h3>
                    <p>Temperature: ${weather.temperature} °C</p>
                    <p>Windspeed: ${weather.windspeed} km/h</p>
                </div>
            `;
            weatherContainer.append(weatherText);
        })
    }

    function fetchIstanbul() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=41.0138&longitude=28.9497&current_weather=true'

        fetch(url)
            .then(response => {
                if (!response.ok) { // Check if the response is successful
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then(data => { // 
                const weather = data.current_weather;
                const weatherText = `
                <div class="weatherCard">
                    <h3>Istanbul</h3>
                    <p>Temperature: ${weather.temperature} °C</p>
                    <p>Windspeed: ${weather.windspeed} km/h</p>
                </div>
            `;
            weatherContainer.append(weatherText);
        })
    }

    function fetchKyoto() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.0211&longitude=135.7538&current_weather=true'

        fetch(url)
            .then(response => {
                if (!response.ok) { // Check if the response is successful
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then(data => { // 
                const weather = data.current_weather;
                const weatherText = `
                <div class="weatherCard">
                    <h3>Kyoto</h3>
                    <p>Temperature: ${weather.temperature} °C</p>
                    <p>Windspeed: ${weather.windspeed} km/h</p>
                </div>
            `;
            weatherContainer.append(weatherText);
        })
    }

    function fetchStockholm() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&current_weather=true'

        fetch(url)
            .then(response => {
                if (!response.ok) { // Check if the response is successful
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then(data => { // 
                const weather = data.current_weather;
                const weatherText = `
                <div class="weatherCard">
                    <h3>Stockholm</h3>
                    <p>Temperature: ${weather.temperature} °C</p>
                    <p>Windspeed: ${weather.windspeed} km/h</p>
                </div>
            `;
            weatherContainer.append(weatherText);
        })
    }
    
    function fetchCapeTown() {
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=-33.9258&longitude=18.4232&current_weather=true'

        fetch(url)
            .then(response => {
                if (!response.ok) { // Check if the response is successful
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Convert the response to JSON
            })
            .then(data => { // 
                const weather = data.current_weather;
                const weatherText = `
                <div class="weatherCard">
                    <h3>Cape Town</h3>
                    <p>Temperature: ${weather.temperature} °C</p>
                    <p>Windspeed: ${weather.windspeed} km/h</p>
                </div>
            `;
            weatherContainer.append(weatherText);
        })
    }

    function fetchAll(){ // Function to fetch all the weather data
        weatherContainer.empty(); // clear the weather container before fetching new data
        fetchRioDeJaneiro();
        fetchIstanbul();
        fetchKyoto();
        fetchStockholm();
        fetchCapeTown();
    }
    fetchAll(); // Initial load
    setInterval(fetchAll, 60000); // Fetch new data every minute
});