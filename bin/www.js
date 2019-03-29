#!/usr/bin/env node

/**
 * Module dependencies.
 */
const http = require('http');
require('./env')();

const port = require('./config/port');
const logger = require('../lib/logger');
const app = require('../app');

app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			logger.setLog('system', 'fatal', `${bind} requires elevated privileges`)
			process.exit(1);
			break;
		case 'EADDRINUSE':
			logger.setLog('system', 'fatal', `${bind} is already in use`);
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	const addr = server.address();
	const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
	logger.setLog('', 'debug', `Listening on ${bind}`);
}
