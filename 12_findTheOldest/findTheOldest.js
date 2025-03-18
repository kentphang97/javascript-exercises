const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

function checkTotalAge(previous, current) {
  const agePrevious = getAge(previous.yearOfBirth, previous.yearOfDeath);
  const ageCurrent = getAge(current.yearOfBirth, current.yearOfDeath);
  return ageCurrent > agePrevious ? current : previous;
}

const findTheOldest = function (array) {
  return array.reduce(checkTotalAge);
};

// Do not edit below this line
module.exports = findTheOldest;
