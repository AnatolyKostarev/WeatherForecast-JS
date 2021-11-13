"use strict";
const $forecastData = document.querySelector(".js-data");

export function currentForecast(obj) {
  let divInfo = document.createElement("div");
  divInfo.classList.add("forecast__info");
  divInfo.innerHTML = `
  <p class="forecast__temperature">${
    obj.temp < 0 ? Math.floor(obj.temp) : Math.ceil(obj.temp)
  }&deg;C</p>
  <p class="forecast__condition">${obj.type}</p>
  <img class="forecast__icon" src="
  https://openweathermap.org/img/wn/${obj.icon}@2x.png"/>
  <button class="forecast__button" type="submit" data-current="wrong">Wrong city?</button>
`;
  $forecastData.append(divInfo);
}
