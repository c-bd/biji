// console.log(global.__dirname); // undefinded ，有问题


// __dirname 表示当前js文件的绝对路径，不包含文件名
// global.console.log(__dirname);  // E:\Study\83\Node-02\Node代码


// __filename 表示当前js文件的绝对路径，包含文件名
// console.log(__filename); // E:\Study\83\Node-02\Node代码\01-global的成员简介.js


// require() -- 加载其他的js文件或json文件
let result = require('./test.json');
console.log(result); // 结果已经是一个js数组了
console.log(result[0].name);


// alert();