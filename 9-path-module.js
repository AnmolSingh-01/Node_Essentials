const path = require('path');

console.log(path.sep);
console.log(path.join);

const filPAth = path.join('/content','subfolder','test.txt');

console.log(filPAth);

const base = path.basename(filPAth);
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');

console.log(absolute);

