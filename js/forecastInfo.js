"use strict";
const $forecastData = document.querySelector(".js-data");

export function currentForecast() {
  let divInfo = document.createElement("div");
  divInfo.classList.add("forecast__info");
  divInfo.innerHTML = `
  <p class="forecast_temperature">8&deg;C</p>
  <p class="forecast__condition">windy</p>
  <button class="forecast__button" type="submit" data-current="wrong">Wrong city?</button>
`;
  $forecastData.append(divInfo);
}
