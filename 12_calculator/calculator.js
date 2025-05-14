const add = function(value1, value2) {
	return value1 + value2;
};

const subtract = function(value1, value2) {
	return value1 - value2;
};

const sum = function(valueArray) {
	return valueArray.reduce((total, current) => total + current, 0);
};

const multiply = function(valueArray) {
  return valueArray.reduce((total, current) => total * current, 1);
};

const power = function(value1, value2) {
	return value1 ** value2;
};

const factorial = function(value) {
	factor = value;
  toBeReturned = 1;
  for(factor; factor > 0; factor--) {
    toBeReturned *= factor;
  }
  return toBeReturned;
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
