/**
 * Created by Pwcong on 2016/11/22.
 */

var fs = require('fs');
var m2h = require('../lib/m2h');

fs.readFile("markdown.md",function (err, data) {

    if(err)
        console.log(err.message);
    else{
        var str = data.toString();

        console.log(m2h(str));

        // var strArray = str.split("\n");
        // console.log(strArray.length);
        // for(var i in strArray)
        //     console.log(strArray[i]);
    }


});
