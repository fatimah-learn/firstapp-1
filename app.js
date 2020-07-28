const and = require('./and');
const nand = require('./nand');

let res = and([1, 1, 1, 0], [1, 1, 1, 1]);
console.log(res);

let resultNand = nand([1, 1, 1, 0], [1, 0, 0, 1]);
console.log(resultNand);
