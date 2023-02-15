const axios = require("axios")

const url = "https://api.weatherapi.com/v1/current.json?key=5144c4e59a6a48be995191514231302&q=bulk"

axios.get(url).then(result => {

    for (var i = 0; i <= result.data.length; i++) {
        const dt = result.data[i];

        console.log(dt.locations.q=london);
        console.log(london);

    
    }
}).catch(err => {
    console.log(err);
})