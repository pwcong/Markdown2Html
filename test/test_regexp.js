/**
 * Created by Pwcong on 2016/11/25.
 */

var util = require('util');

// var str = 'aaa111111bbb222222ccccc3333333dd';
//
// var res = str.match(/[a-zA-Z]+/g);
//
// console.log(res);
//
//
// for(var i = 0; i<res.length;i++){
//
//     str = str.replace(res[i],'ok');
//
// }
//
// console.log(str);


var str = '[Baidu](https://www.baidu.com)';


console.log(str.match(/\[.+]\(.*\)/));