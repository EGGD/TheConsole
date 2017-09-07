//配置服务器地址
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'mmi',
});
connection.connect();
//nodejs文件系统模块
const fs = require('fs');
//加载sql语句
const nodejsSqlStatement = require('./js/sql');
const login = require('./js/getUserData');
const addUser = require('./js/addUser');
const server = http.createServer((req, res) => {
    //设置返回数据类型 解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, { "Content-Type": "application/json" });
    //获取ajax拿到的api接口的参数
    var inIt = nodejsSqlStatement.url(req, res);
    if (inIt.url_info.pathname === '/login') {
        login.getUserData(connection, nodejsSqlStatement.selectUserSQL(), inIt.param, res);
    } else if (inIt.url_info.pathname === '/add') {
        addUser.addUserData(connection, nodejsSqlStatement, inIt, res);
    } else if (inIt.url_info.pathname === '/post') {
        var json=[],req=res;
        http.get('http://xtk.azurewebsites.net/BingDictService.aspx?Word='+encodeURIComponent(inIt.value), (res) => {
            res.setEncoding('utf-8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                } catch (e) {
                    console.error(e.message);
                }
                req.end(rawData);
            });
        }).on('error', (e) => {
            console.error(`错误: ${e.message}`);
        })
    } else {
        res.end();
    }
});
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});
server.on('close', function () {
    connection.end();
});