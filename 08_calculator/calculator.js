const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, currentVal) => total + currentVal, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentVal) => total * currentVal, 1);
};

const power = function(a,b) {
  let total = 1;
	for(let i = 0; i < b; i++)
    total *= a;
  return total;  
};

const factorial = function(num) {
  if(num === 0)
    return 1;
	return num * factorial(num - 1);
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
