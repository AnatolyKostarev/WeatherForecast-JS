"use strict";
const $forecastData = document.querySelector(".js-data");

export function preloader() {
  let divPreloader = document.createElement("div");
  divPreloader.classList.add("lds-default");
  divPreloader.innerHTML = `
  <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;

  $forecastData.append(divPreloader);
}
