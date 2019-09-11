// 定义几个变量
let x = 1;
const y = 2;
let fn = m => m * m;

// 把所有的变量全部挂载到global上
global.x = x;
global.y = y;
global.fn = fn;