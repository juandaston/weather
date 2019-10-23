const axios = require('axios');

const getCoordinates = async (city, country) => {

    const encodedCity    = encodeURI(city);
    const encodedCountry = encodeURI(country);

    const resp = await axios({
                        "method":"GET",
                        "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
                        "headers":{
                        "content-type":"application/octet-stream",
                        "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
                        "x-rapidapi-key":"07257358b2msh266195559ba0866p11b43cjsna56f6d1c8d7c"
                        },"params":{
                        "location":encodedCity
                        }
                        });


    if( resp.data.Results.length === 0){
        throw new Error(`No hay resultados para la direccion ${encodedCity}`);
    }


    let cityFound = resp.data.Results.find((city) => {
        return city.c === encodedCountry;
        
    });

    if( !cityFound){
        throw new Error(`No existe la ciudad ${encodedCity} en el pais ${encodedCountry}`);
    } 
    
    const { name, lat, lon } = cityFound;

    return {
        name,
        lat,
        lon
    } 
}

module.exports = {
    getCoordinates
}