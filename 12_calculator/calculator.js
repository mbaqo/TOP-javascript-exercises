const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach((num) => sum += num);
  return sum;
};

const multiply = function(arr) {
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  return num * (factorial(num - 1));
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
