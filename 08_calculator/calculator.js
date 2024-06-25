const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	if(arr.length == 0)
    return 0;

  return arr.reduce((acc, curr) => acc + curr);
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function(a, b) {
	let product = 1;
  for(let i = 0; i < b; i++)
    product *= a;

  return product;
};

const factorial = function(num) {
	if(num == 0 || num == 1)
    return 1;

  let factorial = 1;
  for(let i = 1; i <= num; i++)
    factorial *= i;

  return factorial;
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
