// 1. 加载mysql模块
const mysql = require('mysql');

// 2. 创建连接对象，设置连接参数
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'heroes',
    multipleStatements: true // 表示一次性可以执行多条SQL
});

// 3. 完成连接到MySQL服务器
conn.connect();

// 4. 查询
/**
 * 4.1 基本的查询
 */
// conn.query('select id,name,nickname from heroes limit 2', (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });

/**
 * 4.2 带占位符的查询
 */
// let sql = 'select * from heroes where id<?';
// conn.query(sql, 4, (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });


/**
 * 4.3 带多个占位符的查询
 */
// let sql = 'select id,name from heroes where id<? and sex=?';
// conn.query(sql, [10, '男'], (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });


/**
 * 4.4 一次性执行多条SQL
 * 要求每条SQL之间使用分号隔开
 */
let sql = `select id,name from heroes where id<4;
            select id,age from heroes where id>30;
            select * from boy`;
conn.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
});


// 5. 关闭连接
conn.end();