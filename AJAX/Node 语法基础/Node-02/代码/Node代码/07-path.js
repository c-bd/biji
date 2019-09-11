const path = require('path');


// extname获取路径中的后缀
// console.log(path.extname('asdfasdf.html')); // .html
// console.log(path.extname('a.b.c.html')); // .html
// console.log(path.extname('aa/bb/cc/a.b.c.html')); // .html


// 将两个或更多个路径拼接到一起
// console.log(path.join('aa', 'bb')); // aa\bb
// console.log(path.join('aa', 'bb', 'test.html')); // aa\bb\test.html
console.log(path.join(__dirname, 'cc', 'dd.json'));