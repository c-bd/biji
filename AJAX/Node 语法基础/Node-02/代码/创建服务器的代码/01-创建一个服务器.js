// 1. 加载http模块
const http = require('http');

// 2. 调用creatServer() 方法，创建 服务对象（server）
const server = http.createServer();

// 3. 调用服务对象（server）的 listen方法，监听端口，开启服务
server.listen(3000, () => {
    console.log('服务器开启了');
});

// 4. 给server对象，注册 “请求” 事件。如果有浏览器的请求过来，就会触发这个事件
// server.on('事件名称', 处理函数);
server.on('request', () => {
    console.log('浏览器，你的请求我收到了，但是我不想搭理你');
});