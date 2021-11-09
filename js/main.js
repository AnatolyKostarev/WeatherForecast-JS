"use strict";
import { currentForecast } from "./forecastInfo.js";
// import { preloader } from "./preloader.js";
// import { forecastSearch } from "./forecastSearch.js";
// import { WEATHER__API, GEO__LOCATION } from "./data.js";

navigator.geolocation.getCurrentPosition(succsess);

function succsess(position) {
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
