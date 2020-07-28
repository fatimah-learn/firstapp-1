HEAD
const and = require('./and');
const nand = require('./nand');

const or = require('./or')
let res = and([1, 1, 1, 0], [1, 1, 1, 1]);



const xor = require('./xor');
let res = xor([1, 1, 1, 0], [1, 1, 1, 1]);
 xor-module
console.log(res);


let resultOr = or([1, 1, 1, 0], [1, 1, 1, 1]);
console.log(resultOr);
