// fs.wirteFile(); -- 异步写入文件
// 特点：
// 1. 如果文件不存在，会创建这个文件
// 2. 如果文本里面有内容，则会覆盖

const fs = require('fs'); // 加载fs模块（对象）

// fs.writeFile(文件, 写入的内容, 处理结果的一个回调函数);

fs.writeFile('./a.txt', 'nihao', (err) => {
    // 如果没有错误，err的值是null；有错误，err就是错误对象
    if (err) {
        console.log('写入失败');
    } else {
        console.log('写入成功');
    }
});