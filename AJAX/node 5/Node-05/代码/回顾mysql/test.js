// 测试，试着导入db.js，并使用它导出的函数
const db = require('./db');

db('select id,name from heroes limit 2', null, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// db.a1();