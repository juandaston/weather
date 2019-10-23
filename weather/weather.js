const axios = require('axios')


const getWeather = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ad46f04fb40b233941f58e72a94f8f5&units=metric`)
    
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}