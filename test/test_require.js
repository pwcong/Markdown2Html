/**
 * Created by Pwcong on 2016/11/22.
 */
var html = require('../lib/html');

var header = [
    'Name',
    'Age'
];

var bodies = [

    ['pwc',18],
    ['plp',19],
    ['pjj',46],
    ['mxc',45]

];

console.log(html.table(header,bodies));