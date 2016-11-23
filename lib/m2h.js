/**
 * Created by Pwcong on 2016/11/22.
 */

function replaceAll(str,oldStr,newStr) {
    var rep = new RegExp(oldStr,'g');
    return str.replace(rep,newStr);
}
