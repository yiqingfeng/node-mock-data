/**
 * @description log4js configure
 */
const path = require('path');
const logRootPath = path.resolve(__dirname, '../logs');

const ISDEBUG = process.env.NODE_ENV === 'development';

module.exports = {
	// a log level is the severity or priority of a log event (ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF)
	// levels: {},
	appenders: {
		out: {
			type: 'console',
		},
		system: {
			type: 'dateFile',
			// filename: 'logs/system/system',
			filename: path.resolve(logRootPath, './system/system'),
			pattern: 'dd.log',
			alwaysIncludePattern: true,
		},
		access: {
			// https://log4js-node.github.io/log4js-node/dateFile.html
			type: 'dateFile',
			filename: path.resolve(logRootPath, './access/access'),
			pattern: 'MM-dd-hh.log',
			category: 'access',
			alwaysIncludePattern: true,
		},
	},
	categories: {
		default: {
			appenders: ['out'],
			level: 'DEBUG',
		},
		system: {
			appenders: ISDEBUG ? ['system', 'out'] : ['system'],
			level: 'DEBUG',
		},
		http: {
			appenders: ['access'],
			level: ISDEBUG ? 'DEBUG' : 'ERROR',
		},
	},
};
