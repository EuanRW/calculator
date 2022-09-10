//CALCULATOR FUNCTIONS
const add = function(a, b) {
	return a + b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return (array.length>0) ? Number(array.reduce((a, b) => a + b)) : 0;
};

const multiply = function(array) {
	return (array.length>0) ? Number(array.reduce((a, b) => a * b)) : 0;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(num) {
	{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
  }
};

//OPERATION
function operate(num1, num2, operation) {
    
}
