const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'heroes'
});
conn.connect();
// 修改
// let sql = 'update heroes set age=10, sex="女" where id=1';
// let sql = 'update heroes set ? where id=?';
// let values = {
//     age: 40,
//     sex: '女'
// };
// conn.query(sql, [values, 1], (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });

// 删除
let sql = 'delete from heroes where id=?';
conn.query(sql, 1, (err, result) => {
    if (err) throw err;
    console.log(result);
});

conn.end();