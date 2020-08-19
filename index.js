const express = require('express');

const config = require('./config.json');

function init() {
	console.log('Hello Pi!');
	const app = express();

	app.use(express.static('public'))

	app.get('/', (req, res, next) => {
		console.log('Served Homepage');
		res.render('index.html');
	});
	app.get('/api', (req, res, next) => {
		console.log('Served API');
		res.json({
			hello: 'pi!',
			route: req.route
		});
	});

	app.listen(config.port, console.log(`listening on ${config.port}`));
}

init();

