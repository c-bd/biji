// 1. 加载mysql
const mysql = require('mysql');

// 2. 设置连接参数，创建连接对象
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'heroes',
    multipleStatements: true // 表示允许一次性执行多条SQL
});

// 3. 连接到MySQL服务器
conn.connect();

// 4. 增删改查
//////////////////////////////////////////////////////////////
/**
 * sql 中如果有一个占位符，conn.query方法的第二个参数需要填一个值
 * sql 中如果有多个占位符，conn.query方法的第二个参数需要传递一个数组
 * SQL 中如果有 “字段=值, 字段=值, ...” 语句，则可以使用一个 ? 表示，需要为这个?传递一个对象
 */
// let sql = 'select id,name from heroes where id < ? and sex = ?';
// let sql = 'insert into heroes set ?';
// let values = {
//     // 属性: 值,
//     // 字段: 值
//     name: '吉格斯',
//     nickname: '爆破鬼才'
// }

let sql = 'update heroes set ? where id = ?';
let values = {
    name: '吉格斯2'
}
conn.query(sql, [values, 38], (err, result) => {
    if (err) throw err;
    console.log(result);
});


//////////////////////////////////////////////////////////////
// conn.query(SQL语句, [给SQL占位符传递的值], 获取结果的回调函数);
// let sql = 'select id,name from heroes where id < 5';
// let sql = 'insert into heroes set name="吉格斯", nickname="爆破鬼才", skill="扔炸弹"';
// let sql = 'update heroes set name="吉格斯2" where id=37';
// let sql = 'delete from heroes where id > 30';
// conn.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });

// 5. 关闭连接
conn.end();