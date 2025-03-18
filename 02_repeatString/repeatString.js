const repeatString = function (string, repeatTimes) {
  if (repeatTimes < 0) return (string = "ERROR");
  let strings = "";

  for (let i = 1; i <= repeatTimes; i++) {
    strings += string;
  }
  return strings;
};

// Do not edit below this line
module.exports = repeatString;
