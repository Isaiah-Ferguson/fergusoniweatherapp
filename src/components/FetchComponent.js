import { prod, dev } from ".././services/enviornment.js";

let apiKey = '&appid='

if (prod.isLive) {
    apiKey += prod.apiKey;
} else {
    apiKey += dev.apiKey;
}

export async function WeekWeatherApiCall(city) {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey + "&units=imperial");
    const data = await promise.json();
    return data;
}

export async function TodaysWeatherApiCall(city) {
    const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + apiKey + "&units=imperial");
    const data = await promise.json();
    return data;
}

export async function CityCall(city) {
    const promise = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + apiKey);
    const data = await promise.json();
    return data;
}

export async function ZipStateFinderCall(zip) {
    const promise = await fetch("https://api.openweathermap.org/geo/1.0/zip?zip=" + zip + apiKey);
    const data = await promise.json();
    return data.name;
}