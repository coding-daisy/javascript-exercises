const getTheTitles = function (listOfBookObjects) {
  return listOfBookObjects.reduce((total, current, currentIndex) => {
    total[currentIndex] = current.title;
    return total;
  }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
