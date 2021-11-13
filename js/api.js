"use strict";

const IPIFY_KEY = "at_S16YNtLOVLuqEWvAWQT3uejhLNl9A";
const OPEN_WEATHER_KEY = "1ae7597707c74c56a3268459c8aab147";

// 1. асинхронная функция для запросов API

const request = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (response.ok) return data;
  throw new Error(data?.message || response.statusText);
};

// 2. асинхронная функция для запроса IP

export async function requestIP() {
  const url = "https://api.ipify.org?format=json";
  const { ip } = await request(url);
  return ip;
}

// 3. асинхронная функция для получения координат устройства по IP

export async function requestLocationByIP(ip) {
  const url = "https://geo.ipify.org/api/v2/country";
  const params = `?apiKey=${IPIFY_KEY}&ipAddress=${ip}`;
  const { location } = await request(`${url}${params}`);
  return location.region;
}

// 4. асинхронная функция для получения текущего прогноза погоды

export async function getForecastByCoords({ latitude, longitude }) {
  const url = "https://api.openweathermap.org/data/2.5/onecall";
  const params = `?lat=${latitude}&lon=${longitude}&units=metric&appid=${OPEN_WEATHER_KEY}`;
  const { current } = await request(`${url}${params}`);
  return {
    temp: current.temp,
    type: current.weather[0].main,
    icon: current.weather[0].icon,
  };
}

// 5. асинхронная функция для получения текущего прогноза погоды по названию города, введенного пользователем

export async function getForecastByCityName(city) {
  const url = "https://api.openweathermap.org/data/2.5/weather";
  const params = `?q=${city}&appid=${OPEN_WEATHER_KEY}&units=metric`;
  const { main, weather } = await request(`${url}${params}`);
  return {
    city,
    temp: main.temp,
    type: weather[0].main,
    icon: weather[0].icon,
  };
}
