// 1. 加载http模块
const http = require('http');

// 2. 创建server对象
const server = http.createServer();

// 3. 注册server的request事件
server.on('request', (req, res) => {
    // 处理浏览器的请求
});

// 4. 监听端口，开启服务
server.listen(3000, () => console.log('服务器开启了'));


/**
 * fs.access('文件名', [是否存在/是否可写/是否可读], (err) => {
 *      // 有错误，err为 错误对象，表示文件不存在
 *      // 没有错误，err为null，表示文件存在
 * });
 * 
 * fs.readFile('文件名', [编码], (err, data) => {
 *      if (err) throw err;
 *      // 没有错误，使用读取的结果，data
 * });
 * 
 * 
 * [3, 4, 5].push(6);
 */