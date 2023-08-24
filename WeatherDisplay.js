import React,{useState, useEffect} from 'react';

function WeatherDisplay({location}){
    const [weatherData, setWeatherData]= useState(null);

    useEffect(()=>{
 // Make API request here using location and the API key
    const apikey= '00b62b834dc35dfa8c1284f7fa582542';
    const apiUrl = 'https://home.openweathermap.org/api_keys';

    fetch(apiUrl)
    .then(response => response.json())
    .then(data =>{
        setWeatherData(data);
    })
    .catch(error =>{
        console.error('Error fetching weather data:', error);
    });
}, [location]);

    if (!weatherData) {
        return <div>Loading...</div>
    }
    return(
        <div>
            {/*Dispaly weather information here*/}
            <h2>Weather in {weatherData.name}</h2>
    <p>Temperature: {weatherData.main.temp}°C</p>
   <p>Feels Like: {weatherData.main.feels_like}°C</p>
      <p>Minimum Temperature: {weatherData.main.temp_min}°C</p>
      <p>Maximum Temperature: {weatherData.main.temp_max}°C</p>
    {/* Display other weather data as needed */}
        </div>
        );
    }

    export default WeatherDisplay;