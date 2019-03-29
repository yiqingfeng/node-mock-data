/**
 * @description 错误处理控制器
 */
const {
	logger,
} = require('./di');

// 404
function noFound(req, res, next) {
	res.render('404');
};

// error handler
function error(err, req, res, next) {
	logger.setlog('error', 'error', err);
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.sendFile(path.join(__dirname, './views/error.html'))
	res.render('error', {
		err,
	});
	res.end();
};


module.exports = [noFound, error];
