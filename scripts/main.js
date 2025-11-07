//Set event listener for form submission
document.getElementById("weatherForm").addEventListener("submit", handleSubmit);


async function handleSubmit(event) {
    event.preventDefault(); //Prevent default form submission (don't refresh page)

/*chaining trim method in case user enters spaces at beginning or end
to help avoid error */
    const cityName = document.getElementById("searchLocation").value.trim();
    await fetchCityData(cityName);
}
   


//Fetch API info
async function fetchCityData(cityName) {
  try {
    const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`);
    const geoData = await geoResponse.json();
    if (!geoData.results?.length) throw new Error("City not found");

    const { latitude, longitude, name, country } = geoData.results[0];
    await fetchForecast(latitude, longitude, name, country);
  } catch (error) {
    console.error(error); 
    /*Replace form w/ 404 */
    weatherForm.innerHTML = "<p style='color:red;'>404: City not found!</p>";
  }
}

async function fetchForecast(lat, lon, cityName, country) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m,relative_humidity_2m&timezone=auto`;
    const response = await fetch(url);
    const data = await response.json();

    updateWeatherUI(data.current, cityName, country);
  } catch (error) {
    console.error(error);
  }
}



//Update UI to show retrieved data
function updateWeatherUI(current) {
  document.getElementById("resultsTemp").textContent = `${current.temperature_2m}°C`;
  document.getElementById("feelslikeValue").textContent = `Feels like: ${current.apparent_temperature}°C`;
  document.getElementById("humidityValue").textContent = `Humidity: ${current.relative_humidity_2m}%`;
  document.getElementById("windValue").textContent = `Wind: ${current.wind_speed_10m} m/s`;
  document.getElementById("precipValue").textContent = `Precipitation: ${current.precipitation} mm`;

  document.getElementById("resultsLocation").textContent = `${cityName}, ${country}`;
  document.getElementById("resultsDate").textContent = new Date().toLocaleDateString();

}






//Initial test code
// console.log("Hello Weather App!");

// Fetch test
// fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`)
//     .then(response => response.json())
//     //Proof of life test (success!)
//     .then(data => console.log(data))

//     .catch(error => console.log(error));

//Fetch data from the api - if fails, throw error
// async function fetchCityData(cityName) {

//     try {
//         const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=10&language=en&format=json`);
    
//         if (!response.ok) throw new Error("Could not fetch resource");
//         const data = await response.json();
//         console.log(data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

