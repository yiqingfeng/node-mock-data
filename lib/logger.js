/**
 * @description 日志处理
 * https://github.com/log4js-node/log4js-node
 */
const {
	configure,
	getLogger,
	connectLogger,
} = require('log4js');

const config = require('../configs/logger');
const typeMap = [
	'all',
	'trace',
	'debug',
	'info',
	'warn',
	'error',
	'fatal',
];
console.log(config.categories);
configure(config);

// 打印日志
exports.setLog = (cate, type, info) => {
	getLogger(cate)[type](info);
};

// 获取日志管理器
exports.getLogger = (cate) => {
	return getLogger(cate);
};

// 请求中间件
exports.httpAccess = () => {
	return connectLogger(getLogger('http'), {
		level: 'auto',
		format: ':method :url',
	});
};
