"use strict";
import { getLocationFromBrowser } from "./geolocation.js";
import {
  requestIP,
  requestLocationByIP,
  getForecastByCoords,
  getForecastByCityName,
} from "./api.js";
import {
  init as InitInterface,
  showLoader,
  showForecast,
  showWarning,
} from "./interface.js";

getLocationFromBrowser()
  .then(getForecastByCoords, currentForecastByIP)
  .then(showForecast, showWarning);

function currentForecastByIP() {
  requestIP()
    .then(requestLocationByIP)
    .then(getForecastByCityName)
    .then(showForecast, showWarning);
}

InitInterface({ onCityChange });

function onCityChange(value) {
  showLoader();
  getForecastByCityName(value).then(showForecast, showWarning);
}
