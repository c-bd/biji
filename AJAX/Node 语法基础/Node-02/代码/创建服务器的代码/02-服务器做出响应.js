// 1. 加载http模块
const http = require('http');

// 2. 创建server对象
const server = http.createServer();

// 3. 监听端口，开启服务
server.listen(3000, () => {
    console.log('又开启服务了');
});

// 4. 注册request事件，当浏览器发送请求的时候，会触发这个事件
server.on('request', (req, res) => {
    // req : request 表示请求。它是一个对象
    // res : response，表示响应。它是一个对象
    // 只要和请求相关的信息，都可以通过req参数获取到，比如获取请求方式、比如获取请求的url、比如获取请求头的一些信息
    // 只要和响应相关的信息，都找res对象。比如做出响应、比如设置响应体、比如设置响应状态码
    // res.setHeader('Content-Type', 'text/html; charset=utf-8'); // -- 设置响应头
    // res.write('hello，我是服务器');  // --  设置响应体，但是不会做出响应
    // res.end(); // -- 做出响应
    // res.statusCode = 200;
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.end('hello，我是服务器'); // -- 直接使用end设置响应体，并做出响应
});