"use strict";

export const getLocationFromBrowser = () => {
  return new Promise((res, rej) => {
    if (!navigator.geolocation) return rej("Not supported");

    navigator.geolocation.getCurrentPosition((data) => {
      const { latitude, longitude } = data.coords;
      res({ latitude, longitude });
    }, rej);
  });
};
