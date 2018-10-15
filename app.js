//程序入口文件
// 1导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

//返回app对象
const app = express();

//配置包
app.engine('html', require('express-art-template'));
