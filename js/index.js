"use strict";
import { getLocationFromBrowser } from "./geolocation.js";
import {
  requestIP,
  requestLocationByIP,
  getForecastByCoords,
  getForecastByCityName,
} from "./api.js";
import { currentForecast } from "./currentForecast.js";

getLocationFromBrowser()
  .then(getForecastByCoords, currentForecastByIP)
  .then(currentForecast);

function currentForecastByIP() {
  requestIP()
    .then(requestLocationByIP)
    .then(getForecastByCityName)
    .then(currentForecast);
}
