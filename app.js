const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const { httpAccess } = require('./lib/logger');
const router = require('./src/router');
const errors = require('./src/errors');

const app = express();
app.set('env', process.env.NODE_ENV);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(httpAccess());
app.use(express.json());
app.use(express.urlencoded({
	extended: false,
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('asdas');
	res.end();
});

/**
 * 转给 Router 处理路由
 */
// app.use(router);

/**
 * 错误处理
 */
app.use(errors);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	// next(createError(404));
	next(res.send(404));
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
