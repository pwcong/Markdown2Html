/**
 * Created by Pwcong on 2016/11/22.
 */



function row(str) {
    return '<p>'+str+'</p>\n';
}

function header(str,opt) {

    if(typeof opt == "number")
        if(opt>=1 && opt <=6)
            return '<h'+opt+'>'+str+'</h'+opt+'>\n';
    else
        return '<h1>'+str+'</h1>\n';

}

function line() {
    return '<hr/>';
}

function img(src,alt,auto){

    if(auto != undefined && auto){

        return '<img src="'+ src + '" alt="' + alt + '" style="width:100%; height:auto;" >\n';

    }

}

function link(url,src) {
    return '<a href="' + url + '">' + src + '</a>\n';
}

function ol(ls) {

    var res = "<ol>\n";

    for(var i in ls)
        res += '\t<li>' + ls[i] + '</li>\n';

    res += '</ol>\n';

    return res;
}

function ul(ls) {
    var res = "<ul>\n";

    for(var i in ls)
        res += '\t<li>' + ls[i] + '</li>\n';

    res += '</ul>\n';

    return res;
}

exports.row = row;
exports.header = header;
exports.line = line;
exports.img = img;
exports.link = link;
exports.ol = ol;
exports.ul = ul;

