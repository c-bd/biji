const express = require('express');
const app = express();
app.listen(4000, () => console.log('4000 start'));

// 提供一个接口
app.get('/getHeroes', (req, res) => {
    // res.send('hello');
    // res.send('alert(456)');
    // res.send('abc()');
    // 
    // res.send('abc(789)');

    // 假设英雄的数据是
    let arr = [
        {id: 1, name: '吉格斯'},
        {id: 2, name: '娜美'}
    ];
    arr = JSON.stringify(arr);
    // res.send(arr)
    // 获取到函数名
    let fn = req.query.callback; // abc
    console.log(fn);
    
    res.send(fn+'(' + arr + ')');
  
});

app.get('/getHeroes2', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '允许来请求的网站');
    // res.setHeader('Access-Control-Allow-Origin', '*'); // 表示允许所有的网站来请求
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // 表示允许指定的网站来请求

    let arr = [
        {id: 1, name: '吉格斯'},
        {id: 2, name: '娜美'}
    ];
    res.send(arr);
});