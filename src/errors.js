/**
 * @description 错误处理控制器
 */
const path = require('path');
const {
	logger,
} = require('./di');

// 404
function noFound(req, res, next) {
	// res.render('404');
	res.sendFile(path.join(__dirname, './views/404.html'));
};

// others
// function error(err, req, res, next) {
// 	if (err && err.status !== 404) {
// 		logger.getLogger('system').error(err);
// 	}
// 	res.status(500).end();
// }
// error handler
function error(err, req, res, next) {
	console.log(err);
	if (err && err.status === 404) {
				res.end();
				return;
			}
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	// res.render('error');
	res.end();
};


module.exports = [noFound, error];
