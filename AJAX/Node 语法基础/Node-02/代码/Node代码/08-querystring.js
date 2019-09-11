const querystring = require('querystring');

let str = 'id=11&name=zs&age=22';

let obj = querystring.parse(str);
console.log(obj); // { id: '11', name: 'zs', age: '22' }


JSON.parse('["apple", "pear"]');


console.log(querystring.stringify(obj)); // id=11&name=zs&age=22