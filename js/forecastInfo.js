"use strict";
const $forecastData = document.querySelector(".js-data");

export function currentForecast(obj) {
  let divInfo = document.createElement("div");
  divInfo.classList.add("forecast__info");
  divInfo.innerHTML = `
  <p class="forecast_temperature">${
    obj.current.temp < 0
      ? Math.floor(obj.current.temp)
      : Math.ceil(obj.current.temp)
  }&deg;C</p>
  <p class="forecast__condition">${obj.current.weather[0].description}</p>
  <button class="forecast__button" type="submit" data-current="wrong">Wrong city?</button>
`;
  $forecastData.append(divInfo);
}
