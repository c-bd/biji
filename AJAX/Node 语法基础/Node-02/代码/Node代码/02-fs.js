// 使用Node中的模块（内置对象），必须先加载这个对象
const fs = require('fs');
// console.log(fs);


// 功能：判断文件或路径是否存在
// fs.access(需要判断的路径, 检测路径是否存在的一个回调函数);
fs.access('E:/Study/83/Node-02/Node代码/test.json', (err) => {
    // console.log(err);
    // err 为 null，表示没有错误；意思是表示判断的文件 存在
    // err 为 错误对象，意思判断的文件 不存在
    if (err) {
        console.log('文件不存在');
    } else {
        console.log('文件存在');
    }
});