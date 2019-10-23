const geo     = require('./geo/geo')
const weather = require('./weather/weather')

const argv = require('yargs').options({
    city: {
        alias: 'd',
        description: 'City direction',
        demand: true
    },
    country: {
        alias: 'c',
        description: 'Country Code ex CO, US',
        demand: true
    }

}).argv;

const getInfo = async ( city, country) => { 
    try{
        let coordinates   = await geo.getCoordinates(city, country);  
        let weatherResult = await weather.getWeather(coordinates.lat, coordinates.lon);
        return `El clima en la ciudad de ${city}, ${country} es de ${weatherResult} grados centrigrados`;
    }catch (e){
        throw new Error(`Error en el servicio ${e}`);
    }    
}

getInfo(argv.city, argv.country)
                .then(console.log)
                .catch(console.log)