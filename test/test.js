var fs = require('fs');
var m2h = require('../lib/m2h');

fs.readFile('test.md', function(err, data) {
  if (err) {
    console.log(err.message);
  } else {
    const str = data.toString();
    console.log(m2h(str));
  }
});
