/**
 * Created by Pwcong on 2016/11/22.
 */

var html = require('./html');
var util = require('./util');

function main(str) {

    var rows = util.splitByLine(str);

    var res = '';

    for (var i = 0; i < rows.length; i++) {

        var t = rows[i].match(/^#\s/)
            || rows[i].match(/^##\s/)
            || rows[i].match(/^###\s/)
            || rows[i].match(/^####\s/)
            || rows[i].match(/^#####\s/)
            || rows[i].match(/^######\s/)
            || rows[i].match(/^\*\s/)
            || rows[i].match(/^\d\.\s/)
            || rows[i].match(/^>\s/)
            || rows[i].match(/^\*\*\*+$/);

        if (t) {

            switch (t[0]) {

                case '# ':

                    res += html.header(html.format(rows[i].substring(2)), 1);

                    break;
                case '## ':

                    res += html.header(html.format(rows[i].substring(3)), 2);

                    break;
                case '### ':

                    res += html.header(html.format(rows[i].substring(4)), 3);

                    break;
                case '#### ':

                    res += html.header(html.format(rows[i].substring(5)), 4);

                    break;
                case '##### ':

                    res += html.header(html.format(rows[i].substring(6)), 5);

                    break;
                case '###### ':

                    res += html.header(html.format(rows[i].substring(7)), 6);

                    break;
                case '* ':

                    var uls = [];

                    while (rows[i].match(/^\*\s/)){

                        uls.push(html.format(rows[i].substring(rows[i].match(/^\*\s/)[0].length)));
                        i++;

                    }

                    res += html.ul(uls);

                    break;

                case '> ':

                    var bqs = [];

                    while (rows[i].match(/^>\s/)){

                        bqs.push(html.format(rows[i].substring(2)));
                        i++;

                    }

                    res += html.blockQuote(html.format(bqs));

                    break;

                case (rows[i].match(/^\d\.\s/)) && (rows[i].match(/^\d\.\s/))[0]:

                    var ols = [];

                    while (rows[i].match(/^\d\.\s/)){

                        ols.push(html.format(rows[i].substring(rows[i].match(/^\d\.\s/)[0].length)));
                        i++;

                    }

                    res += html.ol(ols);

                    break;
                case (rows[i].match(/^\*\*\*+$/)) && (rows[i].match(/^\*\*\*+$/))[0]:

                    res += html.line();

                    break;
                default:
                    break;

            }

        }

    }


    return res;

}


module.exports = main;


