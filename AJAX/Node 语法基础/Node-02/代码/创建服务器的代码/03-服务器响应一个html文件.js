const fs = require('fs');

const http = require('http');
const server = http.createServer();
server.listen(3000, () => console.log('又开启了'));

// 注册request事件
server.on('request', (req, res) => {
    // 使用fs.readFile(); 方法将 index.html 读取，将读取的结果响应给浏览器即可
    fs.readFile('./index.html', (err, data) => {
        // 如果读取过程有错误，则抛出错误，并终止程序向后执行
        if (err) throw err;
        // 如果没有错误，则将读取的结果，响应给浏览器
        // res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(data);
    });
});