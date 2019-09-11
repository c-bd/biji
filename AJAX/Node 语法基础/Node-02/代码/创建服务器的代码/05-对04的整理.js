const fs = require('fs');

const http = require('http');
const server = http.createServer();
server.listen(3000, () => console.log('又又开启了'));

server.on('request', (req, res) => {
    console.log(req.url); //    /login.html
    // 判断浏览器请求的文件是否存在，如果存在，则读取文件响应结果；如果不存在，则告知404
    fs.access('.' + req.url, (err) => {   // ./login.html
        if (err) {
            // 说明文件不存在
            res.writeHead(404, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            res.end('小朋友，你走错了');
        } else {
            // 说明文件存在
            fs.readFile('.' + req.url, (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        }
    });

});