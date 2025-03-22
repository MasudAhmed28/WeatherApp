import React, { useState } from "react";
import "./Weather.css";

const url="https://api.openweathermap.org/data/2.5/"
const key= "040da592c3c44a82b39797070e76eee6"
const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${url}weather?q=${city}&units=metric&appid=${env.WEATHER_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          console.log(data);
        });
      setCity("");
    }
  };
  const datebuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let res =
      days[d.getDay()] +
      " " +
      d.getDate() +
      " " +
      months[d.getMonth()] +
      " " +
      d.getFullYear();
    return res;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "warm"
            : "cold"
          : "cold"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
            value={city}
            onKeyPress={search}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        {typeof weather.main !== "undefined" ? (
          <div>
            <div className="location-box">
              {" "}
              <div className="location">
                {weather.name},{weather.sys.country},
              </div>
              <div className="date">{datebuilder(new Date())}</div>
              <div className="weatherbox">
                <div className="temperature">
                  {weather.main.temp.toFixed()}°C
                </div>
                <div className="description">{weather.weather[0].main}</div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {weather.cod === "404" ? (
          <div className="notfound">Please Enter a Valid City Name</div>
        ) : (
          <div></div>
        )}
      </main>
    </div>
  );
};

export default Weather;
