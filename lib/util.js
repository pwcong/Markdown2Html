/**
 * Created by Pwcong on 2016/11/24.
 */

function replaceAll(str,oldStr,newStr) {
    var rep = new RegExp(oldStr,'g');
    return str.replace(rep,newStr);
}

function splitByLine(str) {

    return str.split('\n');

}


exports.replaceAll = replaceAll;
exports.splitByLine = splitByLine;