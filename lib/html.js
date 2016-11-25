/**
 * Created by Pwcong on 2016/11/22.
 */
var util = require('./util');

function format(str) {

    if(util.isArray(str)){




    }else {
        str = util.replaceAll(str,'<','&lt;');
        str = util.replaceAll(str,'>','&gt;');
        str = util.replaceAll(str,' ','&nbsp;');





    }


    return str;

}

function row(str) {
    return '<p>'+str+'</p>\n';
}

function header(str,opt) {

    if(util.isNumber(opt))
        if(opt>=1 && opt <=6)
            return '<h'+opt+'>'+str+'</h'+opt+'>\n';
    else
        return '<h1>'+str+'</h1>\n';

}

function line() {
    return '<hr/>\n';
}

function img(src,alt,auto){

    if(!util.isUndefined(auto) && auto){

        return '<img src="'+ src + '" alt="' + alt + '" style="width:100%; height:auto;" >\n';

    }else {
        return '<img src="'+ src + '" alt="' + alt + '>\n';
    }

}

function link(url,str) {
    return '<a href="' + url + '">' + str + '</a>\n';
}

function ol(ls) {

    var res = "<ol>\n";

    for(var i = 0; i < ls.length; i++)
        res += '\t<li>' + ls[i] + '</li>\n';

    res += '</ol>\n';

    return res;
}

function ul(ls) {
    var res = "<ul>\n";

    for(var i = 0; i < ls.length; i++)
        res += '\t<li>' + ls[i] + '</li>\n';

    res += '</ul>\n';

    return res;
}

function code(str) {
    return '<code>' + str + '</code>\n';
}

function multCode(str) {
    return '<pre>' + str + '</pre>\n';
}

function strong(str) {
    return '<strong>' + str + '</strong>\n';
}

function blockQuote(bqs) {

    var res = '<blockquote>\n';

    for(var i = 0; i < bqs.length; i++){
        res += row(bqs[i]);
    }

    res += '</blockquote>\n';

    return res;
}

function del(str) {
    return '<del>' + str + '</del>\n';
}

function italic(str) {
    return '<italic>' + str + '</italic>\n';
}

exports.format = format;

exports.row = row;
exports.header = header;
exports.line = line;
exports.img = img;
exports.link = link;
exports.ol = ol;
exports.ul = ul;
exports.code = code;
exports.multCode = multCode;
exports.strong = strong;
exports.blockQuote = blockQuote;
exports.del = del;
exports.italic = italic;
