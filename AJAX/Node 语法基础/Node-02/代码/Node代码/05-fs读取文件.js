const fs = require('fs');

// fs.readFile(); -- 异步读取文件
// fs.readFile(文件, [编码], 处理结果的回调函数);

// fs.readFile('./a.txt', (err, data) => {
//     if (err) {
//         console.log('读取失败');
//         return;
//     }
//     // console.log(data); // 如果没有错误，则输出读取的结果。 <Buffer 6e 69 68 61 6f>
//     console.log(data.toString()); // 如果没有错误，则输出读取的结果。 nihao
// });



// fs.readFile('./a.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log('读取失败');
//     }
//     console.log(data); // nihao
// });



// fs.readFile('./aa.txt', 'utf-8', (err, data) => {
//     // 受if区间影响的代码只有一行的情况下，大括号可以省略
//     if (err) 
//         return console.log('读取失败');
//     console.log(data); // nihao
// });



// fs.readFile('./a.txt', 'utf-8', (err, data) => {
//     // 受if区间影响的代码只有一行的情况下，大括号可以省略
//     if (err) return console.log('读取失败');
//     console.log(data); // nihao
// });


fs.readFile('./a.txt', 'utf-8', (err, data) => {
    // 受if区间影响的代码只有一行的情况下，大括号可以省略
    if (err) throw err; // throw语句，表示抛出的意思
    console.log(data); // nihao
});