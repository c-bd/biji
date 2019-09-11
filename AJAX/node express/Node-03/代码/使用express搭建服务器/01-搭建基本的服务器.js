// 1) 加载 express 模块
const express = require('express');

// 2) 创建 express 服务器
const app = express();

// 3) 开启服务器
app.listen(3000, console.log('express服务器开启了'));

// 4) 监听浏览器请求并进行处理
// 编写一个 GET方式的 接口，接口名字叫做 /time
app.get('/time', (req, res) => {
    res.end(Date.now() + '');
});

app.get('/getMsg', (req, res) => {
    // 做出响应
});

app.post('/addMsg', (req, res) => {

});

//  * 表示任何的url，这里就表示任何的GET请求
app.get('*', (req, res) => {
    res.end('hello');
});
