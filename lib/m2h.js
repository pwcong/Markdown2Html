/**
 * Created by Pwcong on 2016/11/22.
 */

var html = require('./html');
var util = require('./util');

function main(str) {

    var rows = util.splitByLine(str);

    var res = '';

    for(var i = 0; i < rows.length; i++){

        var t = rows[i].match(/^#\s/) || rows[i].match(/^##\s/) || rows[i].match(/^###\s/)
            || rows[i].match(/^####\s/) || rows[i].match(/^#####\s/) || rows[i].match(/^######\s/)
            || rows[i].match(/^*\s/) || rows[i].match(/^>\s/);

        if(t){
            switch (t[0]){

                case '# ':break;
                case '## ':break;
                case '### ':break;
                case '#### ':break;
                case '##### ':break;
                case '###### ':break;
                default:break;

            }
        }

    }

}

module.exports = main;


