// URL 对象，属于ECMAScript，所以不用加载Node模块

// let myUrl = new URL(完整的url);
// let myUrl = new URL(url的路径部分, url的主机部分);

let myUrl = new URL('index.html?id=111&age=222', 'http://www.xxx.com');
// console.log(myUrl);
console.log(myUrl.searchParams.get('id')); // 111