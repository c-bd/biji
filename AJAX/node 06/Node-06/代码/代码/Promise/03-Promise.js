const fs = require('fs');

// 封装一个读取文件的函数
// 函数的返回值是 Promise对象
// 调用当前函数会得到什么? 会得到Promise对象
function readFile (fileName) {
    return new Promise((resolve, reject) => {
        // Promise 里面一定是一个异步操作
        // 异步操作必然有结果（要么成功、要么失败）
        // 成功就调用resolve，失败就调用reject
        fs.readFile(fileName, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(data)
        })
    });
}

/**
 * then方法的特点是
 * 1. 可以接收到前面Promise对象中 resolve 的值
 * 2. 前面的then方法如果返回了一个Promise对象，后面的then可以接收到Promise对象的 resolve 的值
 */

readFile('a.txt').then(res => {
    console.log(res.length);
    return readFile('b.txt');
}).then(res => {
    console.log(res.length);
    return readFile('c.txt');
}).then(res => {
    console.log(res.length);
}).catch(err => {
    console.log(err);
});