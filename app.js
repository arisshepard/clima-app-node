const lugar = require('./lugar/lugar');
const argv = require('./config/yargs').argv;
const clima = require('./clima/clima');

const getInfo = async (direccion) => {
	// conseguimos el lugar
	const coordenadas = await lugar.getLugarLatLng(argv.direccion);

	// conseguimos la temperatura
	const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

	if (!temperatura) {
		throw new Error(`No se pudo determinar el clima de ${direccion}`);
	}

	// salida
	return `El clima de ${direccion} es de ${temperatura}`;
};

getInfo(argv.direccion).then(console.log).catch(console.log);
