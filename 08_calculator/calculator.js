const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
  const sumWithInitial = numArr.reduce((accum, currentVal) => accum + currentVal, 0)
  return sumWithInitial;
};

const multiply = function(numArr) {
  const product = numArr.reduce((accum, currentVal) => accum * currentVal);
  return product;
};

const power = function(operand, exponent) {
	return operand ** exponent;
};

const factorial = function(num) {
	let ans = 1;
  if (num == 0) {
    return 1;
  }
  for (let i = 1; i < num + 1; i++) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
