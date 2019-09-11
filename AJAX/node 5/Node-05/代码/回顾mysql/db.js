// 封装mysql使用的步骤
// 将封装后的函数 导出（导出的目的是给其他文件使用）

function abcd (sql, params, cb) {
    const mysql = require('mysql');
    const conn = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'heroes'
    });
    conn.connect();
    conn.query(sql, params, cb);
    conn.end();
}

// 将函数导出
// module.exports = 对象 / 函数
module.exports = abcd;


// function a1 () {}
// function a2 () {}

// module.exports = {
//     a1, a2
// }