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
app.use((req, res, next) => {
    if (req.method === 'POST') {
        // 接收浏览器提交的数据
        // 1. 定义空字符串，让它保存接收到的数据
        let str = '';
        // 2. 给req注册data事件，当接收都“一块”数据之后，就会触发该事件
        req.on('data', (chunk) => {
            str += chunk;
        });
        // 3. 给req注册end事件，当完全接收了浏览器提交的数据，就会触发end事件
        req.on('end', () => {
            // console.log(str); // name=aa&content=bb
            const querystring = require('querystring');
            req.body = querystring.parse(str);
            next();
        });
    } else {
        next();
    }
});

// 完成 /addMsg 接口
app.post('/addMsg', (req, res) => {
    // 使用接收到的数据
    console.log(req.body); // { name: 'cc', content: 'dddd' }
});

// 完成登录接口
app.post('/login', (req, res) => {
    // 接收浏览器提交的数据
});

