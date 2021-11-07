"use strict";
const $forecastData = document.querySelector(".js-data");

export function forecastSearch() {
  let divSearchCity = document.createElement("div");
  divSearchCity.classList.add("forecast__search");
  divSearchCity.innerHTML = `
  <label for="forecast_city">Type your city here </label>
  <input id="forecast_city" type="search" class="forecast__city" />
  <button class="forecast__button" type="submit">Find</button>
`;
  $forecastData.append(divSearchCity);
}
