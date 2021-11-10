"use strict";
import { currentForecast } from "./forecastInfo.js";
import { getIp, getCoordbyIp, getForecastByIp } from "./api.js";

function getLocation() {
  return new Promise(function (res, rej) {
    navigator.geolocation.getCurrentPosition(res(position.coords));
  });
}

navigator.geolocation.getCurrentPosition(
  getForecastByCoords,
  getForecastByAlternative
);

function getForecastByCoords(position) {
  let crd = position.coords;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&lang=ru&exclude={part}&appid=1ae7597707c74c56a3268459c8aab147`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Geo request failture");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      currentForecast(data);
    });
}

// currentForecast();
// forecastSearch();
