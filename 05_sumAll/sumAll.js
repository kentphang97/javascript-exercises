const sumAll = function (int1, int2) {
  if (
    typeof int1 !== "number" ||
    typeof int2 !== "number" ||
    int1 < 0 ||
    int2 < 0 ||
    !Number.isInteger(int1) ||
    !Number.isInteger(int2)
  ) {
    return "ERROR";
  }

  const min = Math.min(int1, int2);
  const max = Math.max(int1, int2);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
