document.getElementById("searchButton").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value;
    if (city) {
      getWeatherData(city);
    }
  });
  
  function getWeatherData(city) {
    const apiKey = 'c075c1bceff9d2d511f1d16ee0cfb476'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("errorMessage").style.display = "none";
    
    axios.get(url)
      .then(function (response) {
        const data = response.data;
        displayWeatherInfo(data);
      })
      .catch(function (error) {
      
        document.getElementById("errorMessage").style.display = "block";
        console.error("Error fetching data: ", error);
      });
  }
  
  function displayWeatherInfo(data) {
    const weatherDiv = document.getElementById("weatherInfo");
    weatherDiv.innerHTML = `
      <h3>Weather in ${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  }
  