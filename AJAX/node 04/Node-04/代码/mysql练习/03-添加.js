// 1. 加载mysql
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

// 4. 添加
/**
 * 4.1 基本的添加
 */
// let sql = 'insert into heroes set name="拉克丝", nickname="光辉女郎", age=26';
// conn.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });

/**
 * 4.2 带占位符的添加
 */
let sql = 'insert into heroes set ?';
let values = {
    name: '泰达米尔',
    nickname: '蛮族之王',
    sex: '男',
    age: 32
};
conn.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log('添加成功');
});

// 5. 关闭连接
conn.end();