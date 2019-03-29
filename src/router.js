/**
 * @desc 路由处理
 */
const path = require('path');
const express = require('express');
const requireAll = require('require-all');

const router = express.Router();

// 读取所有子路由
const routers = requireAll({
	dirname: path.join(__dirname, './routers/'),
	filter: /(.+)\.route\.js$/,
});

// 递归绑定所有路由

module = router;
