const and = require('./and');
const or = require('./or')
let res = and([1, 1, 1, 0], [1, 1, 1, 1]);
console.log(res);

let resultOr = or([1, 1, 1, 0], [1, 1, 1, 1]);
console.log(resultOr);