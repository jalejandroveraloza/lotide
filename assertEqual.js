// Function Implementation 
const assertEqual =  function(actual, expected){
  if(actual === expected){
    return console.log(`🟢🟢🟢 Assertion Passed:  ${actual}  ===  ${expected}`)
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};

//Export
module.exports = assertEqual;