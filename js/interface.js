"use strict";
const $preloader = document.querySelector(".js-preloader");
const $warning = document.querySelector(".js-warning");
const $warningMessage = document.querySelector(".js-warning-extra");
const $search = document.querySelector(".js-search");
const $currentForecast = document.querySelector(".js-data");
const $temperature = document.querySelector(".js-temperature");
const $forecastCondition = document.querySelector(".js-forecast-condition");
const $kindIcon = document.querySelector(".js-icon");
const $incorrectCity = document.querySelector(".js-incorrect-city");
const $cityInput = document.querySelector(".js-city");
const $tryAgainBtn = document.querySelector(".js-try-again");

export const init = ({ onCityChange }) => {
  $incorrectCity.addEventListener("click", showSearch, false);
  $tryAgainBtn.addEventListener("click", showSearch, false);
  $search.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      onCityChange($cityInput.value);
    },
    false
  );
};

export const showLoader = () => openUp($preloader);
export const showSearch = () => openUp($search);
export const showForecast = ({ temp, type, icon, city }) => {
  $temperature.textContent = `${Math.round(temp)}℃`;
  $forecastCondition.textContent = city ? `${type} in ${city}` : type;
  $kindIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  openUp($currentForecast);
};

export const showWarning = (error) => {
  $warningMessage.textContent = error ? error.toString() : "";
  openUp($warning);
};

function openUp(elem) {
  $preloader.setAttribute("hidden", "");
  $warning.setAttribute("hidden", "");
  $search.setAttribute("hidden", "");
  $currentForecast.setAttribute("hidden", "");
  elem.removeAttribute("hidden");
}
