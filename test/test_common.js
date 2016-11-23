/**
 * Created by Pwcong on 2016/11/22.
 */

// var fs = require('fs');
//
// fs.readFile("markdown",function (err, data) {
//
//     if(err)
//         console.log(err.message);
//     else{
//         var str = data.toString();
//         var strArray = str.split("\n");
//         console.log(strArray.length);
//         for(var i in strArray)
//             console.log(strArray[i]);
//     }
//
//
// });

var html = require('../lib/util/html');

var str = "abcabc";
var res = str.match(/abc/);
console.log(res);