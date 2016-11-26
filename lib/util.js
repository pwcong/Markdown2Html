/**
 * Created by Pwcong on 2016/11/24.
 */

var util = require('util');


function replaceAll(str,oldStr,newStr) {
    var rep = new RegExp(oldStr,'g');
    return str.replace(rep,newStr);
}

function autoSplit(str) {

    return str.split('\n');

}

function isArray(obj) {
    return util.isArray(obj);
}

function isNumber(obj) {
    return util.isNumber(obj);
}

function isUndefined(obj) {
    return util.isUndefined(obj);
}

function isNull(obj) {
    return util.isNull(obj);
}

exports.replaceAll = replaceAll;
exports.autoSplit = autoSplit;
exports.isArray = isArray;
exports.isNumber = isNumber;
exports.isUndefined = isUndefined;
exports.isNull = isNull;