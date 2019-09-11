const path = require('path');
const express = require('express');
const app = express();
app.listen(3000, () => console.log('服务器开启了'));


// 使用中间件的语法
/**
 * app.use([请求的url的开头], 中间件函数);
 * 
 * 中间件函数的写法：
 * (req, res, next) => {
 *      req ： 表示请求的对象，后续的所有req和这里的req是相同的对象
 *      res :  表示响应的对象，后续的所有res和这里的res是相同的对象
 *      next : 它是一个函数，调用它，表示当前的中间件执行完毕了。进入下一个中间件
 * }
 */

// 下面定义中间件，处理所有的文件（html、css、js、png等）
app.use((req, res, next) => {
    // console.log(req.url);
    // 判断是否有浏览器请求的文件，如果有，则读取并响应；如果没有则next
    const fs = require('fs');
    let filename = __dirname + '/public' + req.url;
    fs.access(filename, (err) => {
        if (err) {
            next();
        } else {
            res.sendFile(filename);
        }
    });   
});

// app.use((req, res, next) => {
//     next();
// });


// app.use(express.static('public'));

// 浏览器请求的是什么，服务器就读取这个文件，并将读取的结果响应给浏览器
/* 
app.get('*', (req, res) => {
    console.log(req.url);
    // 读取文件，并响应结果
    res.sendFile(path.join(__dirname, 'public', req.url));
}); 
*/