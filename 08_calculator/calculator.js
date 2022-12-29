const add = function(...args) {
	return args.reduce((acc, arg) => acc + arg, 0);
};

const subtract = function(...args) {
	return args.reduce((acc, arg) => acc - arg);
};

const sum = function(array) {
	return array.reduce((acc, elem) => acc + elem, 0);
};

const multiply = function(array) {
	return array.reduce((acc, elem) => acc * elem, 1);
};

const power = function(base, power) {
	return base ** power; 
};

const factorial = function(num) {
	let result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
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
