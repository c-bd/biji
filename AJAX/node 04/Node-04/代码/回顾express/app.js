const path = require('path');
// 1. 加载express
const express = require('express');

// 2. 创建app对象
const app = express();

// 3. 监听端口
app.listen(3000, () => console.log('开启服务'));


// 中间件的方案 -- 处理html文件的响应工作
// app.use([请求的url的开头], 中间件函数);
app.use((req, res, next) => {
    // 判断 请求的url 如果以 '.html' 结尾，则表示的当前浏览器请求的就是 html文件
    if (req.url.endsWith('.html')) {
        // 读取html文件，并响应
        let filepath = path.join(__dirname, 'manager', req.url);
        res.sendFile(filepath);
    } else {
        next();
    }
});

// 中间件处理图片
app.use((req, res, next) => {
    // console.log(req.url);
    if (req.url.startsWith('/images')) {
        let filepath = path.join(__dirname, 'manager', decodeURIComponent(req.url));
        res.sendFile(filepath);
    } else {
        next();
    }
});


// 中间件处理css和js等其他静态资源
app.use('/lib', (req, res, next) => {
    console.log(req.url);
    let filepath = path.join(__dirname, 'manager', 'lib', decodeURIComponent(req.url));
    res.sendFile(filepath);
});

// app.get('/index.html', (req, res) => {
//     // 读取index.html，并将读取的结果响应
//     let filepath = path.join(__dirname, 'manager', 'index.html');
//     res.sendFile(filepath);
// });



// 4. 编写接口
// app.get('/getHeroes', (req, res) => {

// });

// app.get('/addHeroes', (req, res) => {

// });