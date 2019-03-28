var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'trace';
logger.debug("Some debug messages");

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
