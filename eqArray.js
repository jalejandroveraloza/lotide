const assertEqual = require('./assertEqual');

const eqArray = function(array, array2){
  return JSON.stringify(array) === JSON.stringify(array2);
}

module.exports = eqArray;
