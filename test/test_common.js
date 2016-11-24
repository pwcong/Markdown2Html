/**
 * Created by Pwcong on 2016/11/22.
 */

var fs = require('fs');
var html = require('../lib/html');


fs.readFile("markdown",function (err, data) {

    if(err)
        console.log(err.message);
    else{
        var str = data.toString();

        console.log(html.format(str));

        console.log(str);

        // var strArray = str.split("\n");
        // console.log(strArray.length);
        // for(var i in strArray)
        //     console.log(strArray[i]);
    }


});
