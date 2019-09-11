// 定义几个变量
let x = 1;
const y = 2;
let fn = m => m * m;

// 把变量导出
// module.exports = 导出的对象 / 导出的函数
module.exports = {
    x: x,
    y: y,
    fn: fn
}
// module.exports = {
//     x,
//     y,
//     fn
// }