//use bitwise packege
const and = require('./and');
let res = and([1, 1, 1, 0], [1, 1, 1, 1]);
console.log(res);


const bitwise = require('bitwise');

module.exports = function (firstOperand, secondOperand){
    return bitwise.bits.xor(firstOperand, secondOperand);
}