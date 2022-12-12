const eqArray = require('./eqArray');

const assertArraysEqual = function(actualArr, expectedArr) {
  let arraysEqual = eqArray(actualArr, expectedArr);
  if (arraysEqual) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArr} !== ${expectedArr}`);
  }
};

module.exports = assertArraysEqual;

