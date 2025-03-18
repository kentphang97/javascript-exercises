const palindromes = function (string = "") {
  let temp = string.toLowerCase().replaceAll(/[\s\W_]+/g, "");
  let reverseTemp = temp.split("").reverse().join("");
  if (temp == reverseTemp) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
