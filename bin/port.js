/**
 * @description Get port from environment and store in Express.
 */

// Normalize a port into a number, string, or false.
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

module.exports = function getPort() {
	return normalizePort(process.env.PORT || '3000');
};
