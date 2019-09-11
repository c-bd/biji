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