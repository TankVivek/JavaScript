


const axios = require("axios")

const url = "https://restcountries.com/v3.1/all"    



const call = async (url) => {
// axios.get(url).then(result => {
try{
        axios.get(url)
     
    for (var i = 0; i <= result.data.length; i++) {
        const dt = result.data[i];
        console.log(dt.name.common);
        // console.log(dt.currencies);
        // console.log(dt.continents);
        // console.log(dt.population);
    }
}catch (err){
    console.log(err);
}}

call();