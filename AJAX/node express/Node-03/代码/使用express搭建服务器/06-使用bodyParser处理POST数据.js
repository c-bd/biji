const express = require('express');
const app = express();
app.listen(3000, () => console.log('开启服务了'));

// 处理（开放）静态资源
app.use(express.static('public')); // 参数public指的是存放静态资源的public文件夹

///////////////////////////////////////////////////////

// 完成 /getMsg 接口
app.get('/getMsg', (req, res) => {
    // 读取db.json，获取所有的留言数据
    let result = require('./db.json'); // result是JS数组
    res.send(result); // send方法会自动将JS数组转成 JSON格式
});

// 中间件 -- 接收浏览器提交的POST类型的数据
const bodyParser = require('body-parser');
// app.use(中间件函数);
// 下面的中间件函数，专门处理Content-Type为application/x-www-form-urlencoded的数据的
app.use(bodyParser.urlencoded({extended: false}));

// 完成 /addMsg 接口
app.post('/addMsg', (req, res) => {
    // 使用接收到的数据
    console.log(req.body); // { name: 'cc', content: 'dddd' }
});

// 完成登录接口
app.post('/login', (req, res) => {
    // 接收浏览器提交的数据
});

