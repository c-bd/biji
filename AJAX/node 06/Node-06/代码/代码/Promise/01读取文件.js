// 异步读取三个文件，并且要求先输出a的结果、再输出b的结果，最后输出c的结果

const fs = require('fs');

// console.log(111);

fs.readFile('a.txt', 'utf-8', (err, data) => {
    console.log(data.length);
    fs.readFile('b.txt', 'utf-8', (err, data) => {
        console.log(data.length);
        fs.readFile('c.txt', 'utf-8', (err, data) => {
            console.log(data.length);
        })
    })
})

const fs =require('fs')
fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log();
    




})



// console.log(222);