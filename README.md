# Markdown2Html
A markdown parser which can translate markdown into html.

# Usage

## First Step. Execute the follow command in terminal.
```
npm install m2h --save
```

## Second Step. Import module 'm2h' into your code.
```
var m2h = require('m2h');

console.log(m2h('# Hello')); // <h1>Hello</h1>
console.log(m2h('[Pwcong](http://www.pwcong.me)')); // <a href="http://www.pwcong.me">Pwcong</a>

```
