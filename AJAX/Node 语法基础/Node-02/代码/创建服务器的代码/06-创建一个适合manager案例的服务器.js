const fs = require('fs');

const http = require('http');
const server = http.createServer();
server.listen(3000, () => console.log('服务器启动了'));

server.on('request', (req, res) => {
    console.log(req.url);
    let filename = './manager' + decodeURIComponent(req.url);
    // console.log(filename); // ./manager/add.html
    // 判断文件是否存在
    fs.access(filename, (err) => {
        if (err) {
            // 说明文件不存在
            res.statusCode = 404;
            res.end('');
        } else {
            // 说明文件存在
            fs.readFile(filename, (err, data) => {
                if (err) throw err;
                res.end(data);
            });
        }
    });
});