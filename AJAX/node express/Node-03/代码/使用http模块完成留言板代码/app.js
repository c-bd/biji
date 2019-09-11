const fs = require('fs');

// 创建web服务器的代码
const http = require('http');
const server = http.createServer();
server.listen(3000, () => console.log('留言板的服务器开启了'));

// 浏览器的请求事件
server.on('request', (req, res) => {

    // 写一个 /time 接口
    if (req.url === '/time' && req.method === 'GET') {
        // end方法，参数不能是number类型，否则end会将数字当做是http状态码
        res.end(Date.now() + '');
    }

    // 写一个 /getMsg 接口，用于获取留言数据
    if (req.url === '/getMsg' && req.method === 'GET') {
        // 读取留言板的数据，并将读取的结果响应给浏览器
        let result = require('./db.json');
        // console.log(result);
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify(result));
    }

    // 写一个 /addMsg 接口，用于添加留言数据
    if (req.url === '/addMsg' && req.method === 'POST') {
        // console.log(1111);
        // 1. 接收浏览器提交的数据
            // 1.1 定义一个空字符串，用于保存浏览器提交的数据
            let str = '';
            // 1.2 给req对象，注册一个data事件
            // 当有一块数据提交过来的时候，就会触发这个事件
            // 服务器接收浏览器提交的数据，也是分块接收了
            // 事件处理函数的形参 chunk 表示接收到的那一块数据
            req.on('data', (chunk) => {
                str += chunk;
            });
            // 1.3 给req对象，注册一个end事件 
            // 当完全接收了浏览器提交的数据，会触发
            req.on('end', () => {
                console.log(str); // name=laowang&content=hello world
                // 2. 把数据存到 db.json 中
                // 2.1 读取db.json 中原有的数据
                let result = require('./db.json'); // 结果已经是JS数组了
                // 2.2 处理新的数据
                const querystring = require('querystring');
                let newMsg = querystring.parse(str);
                // 2.3 将新的留言数据，放到result中
                result.push(newMsg);
                // 2.4 将result放回到db.json中
                fs.writeFile('./db.json', JSON.stringify(result), (err) => {
                    // 3. 做出响应
                    if (err) {
                        // 添加失败
                        res.end('false');
                    } else {
                        // 添加成功
                        res.end('true');
                    }
                });  
            });
            return;
    }

    // 查看浏览器请求的url是什么？
    // console.log(req.url);
    /**
     *  /message.html
        /assets/bootstrap.css
        /assets/avatar.png
        /favicon.ico
     */
    // 判断 浏览器请求的文件是否存在，如果存在，则读取它
    fs.access('./public' + req.url, (err) => {
        if (err) {
            // 文件不存在，告知浏览器即可
            res.statusCode = 404;
            res.end('');
        } else {
            // 读取 浏览器请求的文件 ，并将读取的结果响应给浏览器
            fs.readFile('./public' + req.url, (err, data) => {
                if (err) throw err;
                // console.log(req.url);
                const mime = require('mime'); // mime的作用，可以根据文件名生成合理的类型
                let type = mime.getType(req.url);
                // console.log(type);
                res.setHeader('Content-Type', type);
                res.end(data);
            });
        }
    });

});