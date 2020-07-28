//use bitwise packege
const bitwise = require('bitwise');

module.exports = function (firstOperand, secondOperand){
    return bitwise.bits.nand(firstOperand, secondOperand);
}