const ftoc = function(temp) {
  const celsius = ((temp-32) * (5/9)).toFixed(1);
  if(celsius[celsius.length - 1] === '0')
    return parseInt(celsius);
  return parseFloat(celsius);
};

const ctof = function(temp) {
  const farenheight = ((temp * 9/5) + 32).toFixed(1);
  if(farenheight[farenheight.length - 1] === '0')
    return parseInt(farenheight);
  return parseFloat(farenheight);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
