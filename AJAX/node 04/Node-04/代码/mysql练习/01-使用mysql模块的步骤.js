// 1. 加载mysql模块
const mysql = require('mysql');

// 2. 创建连接对象，设置连接参数
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'heroes'
});

// 3. 连接到MySQL服务器
conn.connect();

// 4. 查询（增删改查）
// conn.query(SQL语句, [SQL语句中占位符的值], 获取查询结果的回调函数);
/**
 * 查询结果的回调函数：
 *      参数1： err
 *      参数2： result   ---  查询的结果
 *      参数3： fields   ---  字段（当前查询语句涉及到的字段信息）
 */

conn.query('select * from heroes limit 1', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
});

// 5. 关闭连接
conn.end();