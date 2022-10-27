const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const tmp = arr.reduce((total, item) => total += item, 0);
  return tmp;
};

const multiply = function(arr) {
  const tmp = arr.reduce((total, item) => total *= item, 1);
  return tmp;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let tmp = 1;
  for (let i = a; i > 0; i--) {
    tmp *= i;
  }
  return tmp;
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
