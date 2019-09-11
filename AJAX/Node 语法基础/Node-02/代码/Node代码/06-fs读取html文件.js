const fs = require('fs');

fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data); // 读取html文件，读取的结果就是文件中的标签
});