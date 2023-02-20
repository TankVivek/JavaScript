


const getWeather = () => {

    const location = document.getElementById("cityname").value

    fetch(`/weather?location=${location}`).then(result => {
        return result.json()
    }).then(data => {

        city.innerHTML = data.city
        temp.innerHTML = data.temp
        pressure.innerHTML = data.pressure
        humidity.innerHTML = data.humidity
        lat.innerHTML = data.lat
        lng.innerHTML = data.lon


    }).catch(err => {
        console.log(err);
    })}
