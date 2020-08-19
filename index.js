const express = require('express');

const config = require('./config.json');

function init() {
	console.log('Hello Pi!');
	const app = express();

	app.get('/', (req, res, next) => res.json({ hello: 'pi!' }));
	app.get('/route1', (req, res, next) => res.json({ hello: 1 }));
	app.get('/route2', (req, res, next) => res.json({ route: 2 }));

	app.listen(config.port, console.log(`listening on ${config.port}`));
}

init();

