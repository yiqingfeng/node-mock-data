/**
 * 生成一个 http server 提供 /mockdata 相关接口
 */
const express = require('express');
const configs = require('../settings/server.js');

const app = express();

app.all('/mockdata')

app.listen(config.port);