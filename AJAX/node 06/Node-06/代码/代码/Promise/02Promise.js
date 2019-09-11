// const fs = require('fs');
// // promise ： 承诺
// // new Promise(函数);

// /**
//  * let p = new Promise((resolve, reject) => {
//  *      resolve：   解决，是一个函数。成功了调用这个函数
//  *      reject:    失败，是一个函数，失败了调用这个函数
//  * });
//  */

// let p = new Promise((resolve, reject) => {
//     // 异步读取文件
//     fs.readFile('a.txt', 'utf-8', (err, data) => {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(data);
//         }
//     });
// });

// // 上面只是定义一个 Promise，里面封装一个异步操作
// // 下面then方法，才是获取结果的方法
// // p.then(处理成功的函数, [处理失败的函数]);
// p.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
// promise   承诺

// 参数是一个函数 而函数里的参数又是两个函数
// 成功执行resolve这个函数，失败执行reject这个函数

// 这里的内容必须写一个异步操作 同步的没有任何意义   读取文件和写文件都是异步操作
function lifei(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            // err?reject(err):resolve(data.length)
            err = reject(err) || resolve(data.length)
        })
    })
}
//    这里return一个对象 下面可以继续往对象上挂方法
// 调用这个函数的返回值是一个对象
lifei('a.txt').then((res)=>{

console.log(res.length);

return lifei('b.txt')

}).then((res)=>{
    console.log(res.length);
    return lifei('c.txt')
}).then((res)=>{
    console.log(res.length);
    
}).catch(err=>{
    throw err
})



