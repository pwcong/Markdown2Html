/**
 * Created by Pwcong on 2016/11/25.
 */

var str = '1. Hello';

console.log(str.substring(str.match(/\d\.\s/)[0].length));