/**
 * @description 日志处理
 * https://github.com/log4js-node/log4js-node
 */
const {
	configure,
	getLogger,
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

configure(config);

// 打印日志
exports.setLog = (cate, type, info) => {
	getLogger(cate)[type](info);
};

// 获取日志管理器
exports.getLogger = (cate) => {
	return getLogger(cate);
};
