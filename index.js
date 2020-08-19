const express = require('express');
const github = require('./lib/github');

const config = require('./config.json');

const routes = {
	'/': (req, res, next) => {
		console.log('Served Homepage');
		res.render('index.html');
	},
	'/github': async (req, res, next) => {
		github.getTotalContributions().then(c => res.send(c > 3000)).catch(next);
	}
};

function init() {
	const app = express();
	app.use(express.static('public'))
	Object.entries(routes).forEach(([route, handler]) => app.get(route, handler));
	app.listen(config.port, console.log(`Hello Pi!\nlistening on ${config.port}`));
}

init();

