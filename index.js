const express = require('express');

const PORT = 5000;

function init() {
	console.log('Hello Pi!');
	const app = express();

	app.get('/', (req, res, next) => res.json({ hello: 'pi!' }));
	app.get('/route1', (req, res, next) => res.json({ hello: 1 }));
	app.get('/route2', (req, res, next) => res.json({ route: 2 }));
	app.listen(PORT, console.log(`listening on ${PORT}`));
}

init();

