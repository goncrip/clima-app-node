const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodedUrl,
        timeout: 10000,
        headers: { 'x-rapidapi-key': 'dc1261c3cfmsh00ad124a52d3544p10333djsne31ed4e2f3d3' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados para ' + direccion);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}