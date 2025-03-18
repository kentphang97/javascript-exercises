const add = function (...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result;
};

const subtract = function (int1, int2) {
  return int1 - int2;
};

const sum = function (array) {
  return array.reduce(smallSum, 0);
};

function smallSum(accumulator, element) {
  return accumulator + element;
}

const multiply = function (array) {
  return array.reduce(smallMultiply);
};

function smallMultiply(accumulator, element) {
  return accumulator * element;
}
const power = function (int, power) {
  return Math.pow(int, power);
};

const factorial = function (int) {
  //5
  let sumFact = 1;
  for (let i = int; i > 0; i--) {
    sumFact *= i;
  }
  return sumFact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
