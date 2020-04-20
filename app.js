const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// argv.direccion
console.log(argv.direccion);

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    });

clima.getClima(-32.33, -58.08)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));*/

const getInfo = async(direccion) => {
    // Salida
    const latLng = await lugar.getLugarLatLng(direccion);

    const climaResp = await clima.getClima(latLng.lat, latLng.lng);

    return climaResp;
}

const dir = argv.direccion;

getInfo(dir).then(resp => {
    console.log(`El clima de ${dir}  es de ${resp}`);
}).catch(err => {
    console.log(`No se puedo determinar el clima de ${dir}`, err);
})