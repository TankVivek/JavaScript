const geocode = require("./geocode")
const weather = require("./weather")
const city = process.argv[2]

if (!city) {
    console.log("Please enter city name : ");
    return;
}

geocode.getGeocode(city, (data, err) => {
    console.log(data);
    weather.getWeather(data.lat, data.lng, (data, err) => {
        console.log(data);
    })
})