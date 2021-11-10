"use strict";

// export const WEATHER__API =
// "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=1ae7597707c74c56a3268459c8aab147";
// export const GEO__LOCATION =
// "https://geo.ipify.org/api/v2/country,city?apiKey=at_S16YNtLOVLuqEWvAWQT3uejhLNl9A&ipAddress=8.8.8.8";

export function getIp() {
  return fetch("https://api.ipify.org?format=json").then((response) => {
    if (!response.ok) {
      throw new Error("IP request failture");
    }
    return response.json();
  });
}

export function getCoordbyIp(obj) {
  return fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_S16YNtLOVLuqEWvAWQT3uejhLNl9A&ipAddress=${obj.ip}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Geo by IP request failture");
    }
    return response.json();
  });
}

export function getForecastByIp(obj) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${obj.location.lat}&lon=${obj.location.lng}&units=metric&lang=ru&exclude={part}&appid=1ae7597707c74c56a3268459c8aab147`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Forecast failture");
    }
    return response.json();
  });
}
