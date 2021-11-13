"use strict";
const $preloader = document.querySelector(".content__main");

export function preloader() {
  let divPreloader = document.createElement("div");
  divPreloader.classList.add("lds-spinner");
  divPreloader.innerHTML = `
  <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;

  $preloader.prepend(divPreloader);
}
