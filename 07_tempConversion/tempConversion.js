const convertToCelsius = function(fahrenheit) {
  let conversion = (fahrenheit -32) * 5/9;
  return (Math.round(conversion * 10) / 10).toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  let conversion = celcius * 5/9 + 32;
  return (Math.round(conversion * 10) / 10).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
