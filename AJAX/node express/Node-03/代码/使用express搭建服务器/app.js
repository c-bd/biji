//////////////////////////////////////////
// 创建并开启服务器
const express = require('express');
const app = express();
app.listen(3000, () => console.log('开启服务'));

/////////////////////////////////////////
// 使用中间件处理静态资源文件（包含html文件）
app.use(express.static('public')); // 参数public表示文件存放的位置

/////////////////////////////////////////
// 使用中间件处理POST数据
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

////////////////////////////////////////////
// 完成 /getMsg 接口
app.get('/getMsg', (req, res) => {
    // 读取db.json
    let result = require('./db.json');
    // 将多有的留言数据，响应给浏览器
    res.send(result);
});


// 完成 /addMsg 接口
app.post('/addMsg', (req, res) => {
    // 获取到新的留言
    let newMsg = req.body;  // 得到JS对象
    // 读取所有的留言
    let allMsg = require('./db.json'); // 得到JS数组
    // 将新的留言放到所有留言中
    allMsg.push(newMsg);
    // 把所有的留言写入到db.json中
    const fs = require('fs');
    fs.writeFile('./db.json', JSON.stringify(allMsg), (err) => {
        if (err) {
            // 写入失败，即添加失败
            res.send(false); // res.end('false');
        } else {
            res.send(true);
        }
    });
});