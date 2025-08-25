import { useState } from "react";

function WeatherBackground() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const API_KEY = "ff7e8748f0ed228c27942f4317a2dffb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data) {
      setWeatherData(data);
    }
  };

  return (
    <div className="container1">
      <div className="heading text-center">
        <h1>Weather App</h1>
      </div>
      <div className="small-container">
        <div className="city">
          <input
            type="text"
            placeholder="Enter the city/country"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <button
            type="button"
            className="search"
            onClick={() => {
              fetchApi();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeatherBackground;
