/**
 * Created by Pwcong on 2016/11/22.
 */

function row(str) {
    return '<p>'+str+'</p>';
}

function header(str,opt) {

    if(typeof opt == "number")
        if(opt>=1 && opt <=6)
            return '<h'+opt+'>'+str+'</h'+opt+'>';
    else
        return '<h1>'+str+'</h1>';

}

function line() {
    return '<hr/>';
}




exports.row = row;
exports.header = header;
exports.line = line;

