// aa中要使用bb中定义的变量
require('./bb.js');

// 通过全局变量global可以实现模块化
console.log(global.x);
