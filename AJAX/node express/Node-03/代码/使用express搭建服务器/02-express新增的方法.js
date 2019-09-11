const express = require('express');
const app = express();
app.listen(3000, () => console.log('开启了'));

//////////////////////////////////////////////////////////

// 编写一个测试接口
app.get('/test', (req, res) => {
    let result = require('./db.json'); // 读取的结果是JS数组
    // res.end(result);

    /**
     * send方法： 功能是做出响应，可以代替end方法
     * 1. 设置编码
     * 2. 可以直接响应JS结构的数据。可以直接响应一个JS数组，在向浏览器返回数据的时候，它会自动将JS数组转成JSON
     */
    // res.send(result);


    /**
     * sendFile方法 -- 功能是读取文件，并将文件的结果响应
     * 要求：
     * 传递的参数必须是一个绝对路径
     */
    res.sendFile(__dirname + '/public/message.html');

});