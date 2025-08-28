import { useState } from "react";
import { IoCloudyOutline } from "react-icons/io5";
import { CiTempHigh } from "react-icons/ci";
import { FaTemperatureHigh } from "react-icons/fa6";
import { FaTemperatureLow } from "react-icons/fa";
import { GiWindSlap } from "react-icons/gi";

function WeatherBackground() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");

  const API_KEY = "ff7e8748f0ed228c27942f4317a2dffb";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      setWeatherData(data);
      setError("");
    } else {
      setError("An Error Occured :No Data Found");
    }
  };

  return (
    <div className="container1">
      <div className="heading text-center">
        <h1>Weather App</h1>
      </div>
      <div className="small-container1">
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
                setCity("");
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="text-center p-2">{error && <p>{error}</p>}</div>

        <div>
          {weatherData &&
            weatherData.weather &&
            weatherData.weather[0].main === "Clouds" && (
              <div>
                <div className="flex justify-center text-gray-900 text-7xl dark:text-blue-600 ">
                  <IoCloudyOutline />
                </div>
                <div className="text-center">
                  {weatherData.name}({weatherData.sys.country})
                </div>
              </div>
            )}
        </div>
        {weatherData && weatherData.main && weatherData.wind && (
          <div className="">
            <div className="flex justify-between p-2">
              <div>
                <div className="flex justify-center text-gray-900 text-5xl dark:text-white ">
                  <CiTempHigh />
                </div>
                <h1>Temp : {weatherData.main.temp}°C </h1>
              </div>
              <div>
                <div className="flex justify-center text-gray-900 text-5xl dark:text-white ">
                  <CiTempHigh />
                </div>
                <h1>Feels Like : {weatherData.main.feels_like}°C</h1>
              </div>
            </div>
            <div className="flex justify-between p-2">
              <div>
                <div className="flex justify-center text-gray-900 text-5xl dark:text-blue-500  ">
                  <FaTemperatureLow />
                </div>
                <h1>MinTemp:{weatherData.main.temp_min}°C</h1>
              </div>
              <div>
                <div className="flex justify-center text-gray-900 text-5xl dark:text-orange-600 ">
                  <FaTemperatureHigh />
                </div>
                <h1>MaxTemp:{weatherData.main.temp_max}°C</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <div className="flex justify-center text-gray-900 text-5xl dark:text-gray-600 ">
                  <GiWindSlap />
                </div>
                <h1>Wind_Speed : {weatherData.wind.speed}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherBackground;
