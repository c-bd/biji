const fs = require('fs');
// async用于修饰一个包含有异步操作的函数
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
async function aaa () {
    return await readFile('a.txt');
        // let c = await readFile('c.txt');
        // let b = await readFile('d.txt');    
}
aaa().then((res)=>{
    console.log(res);
    
})

// console.log(b.length);
// console.log(c.length);
// aaa().then();
// aaa().catch((err)=>{
//     console.log(err); 
// })
// const fs =require('fs')
// function readFile(fileName){
//     return new Promise((resolve,reject)=>{
//         // 这里必须是一个异步的请求
//         err? reject(err):resolve(data.length)
//     })
// }
// // readFile(fileName)=abc()=new Promise((resolve,reject)=>{})
// async function abc() {
//     let a = await readFile('a.txt')
//     let b = await readFile('b.txt')
//     let c = await readFile('c.txt')
// }