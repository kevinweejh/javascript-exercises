const convertToCelsius = function(tempInF) {
  let tempInC = (tempInF - 32) * 5 / 9;
  const roundedTempInC = (tempInC % 1 == 0) ? tempInC : Number(tempInC.toFixed(1));
  return roundedTempInC;
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = (tempInC * 9 / 5) + 32;
  const roundedTempInF = (tempInF % 1 == 0) ? tempInF : Number(tempInF.toFixed(1));
  return roundedTempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
