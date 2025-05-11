const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureInCelsius = (temperatureInFahrenheit - 32) * (5/9);
  return (Math.round(temperatureInCelsius*10)/10);
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let temperatureInFahrenheit = (temperatureInCelsius * (9/5)) + 32;
  return (Math.round(temperatureInFahrenheit*10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
