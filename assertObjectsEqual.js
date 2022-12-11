const eqArrays = function(array, array2){
  return JSON.stringify(array) === JSON.stringify(array2);
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  
  if(JSON.stringify(actual) === JSON.stringify(expected)){
    return console.log(`🟢🟢🟢 Assertion Passed:  ${inspect(actual)}  ===  ${inspect(expected)}`)
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const eqObjects = function(object1, object2) {
  let array1 = []
  let array2 = []
  array1 = Object.keys(object1)
  array2 = Object.keys(object2)
  if(array1.length === array2.length){
    for (const key of array1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
       return eqArrays(object1[key], object2[key]);
      }
     if(object1[key] !== object2[key]){
        return false
     }
  } 
  return true
  } else {
    return false;
}
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertObjectsEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)); // => false