/**
 * @desc 环境变量处理
 */
// 解析命令行参数
function parseCli() {
	const argv = Array.prototype.slice.call(process.argv, 2);
	const params = {};
	argv.forEach(item => {
		let param = item.split('=');
		switch (param.length) {
			case 1:
				if (param[0]) {
					params[param[0]] = true;
				}
				break;
			case 2:
				if (param[0] && param[1]) {
					params[param[0]] = param[1];
				}
				break;
			default:
				break;
		};
	});
	return params;
}

module.exports = function getEnv() {
	const params = parseCli();

	process.env.NODE_ENV = params['--release'] ? 'production' : 'development';

	if (params['-p'] || params['--port']) {
		process.env.PORT = params['-p'] || params['--port'];
	}

	return params;
}
