/*const removeFromArray = function (arr =[], ...args) {
  return arr.filter((item) => !args.includes(item));
}; */

const removeFromArray = function (arr = [], ...args) {
  const tempArray = [];

  arr.forEach((items) => {
    if (!args.includes(items)) {
      tempArray.push(items);
    }
  });
  return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
