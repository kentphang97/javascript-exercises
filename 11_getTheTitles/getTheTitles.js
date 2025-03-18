const getTheTitles = function (array = []) {
  return array.map(getTitle);
};

function getTitle(value) {
  return value.title;
}

// Do not edit below this line
module.exports = getTheTitles;
