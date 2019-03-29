/**
 * @description 错误处理控制器
 */
const {logger} = require('./di');

// 404
function noFound(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
};

// others
function error(err, req, res, next) {
	if (err && err.status !== 404) {
		logger.getLogger('system').error(err);
	}
	res.status(500).end();
}

module.exports = [noFound, error];
