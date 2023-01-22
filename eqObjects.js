const eqArrays = function(array, array2){
  return JSON.stringify(array) === JSON.stringify(array2);
}


const assertEqual =  function(actual, expected){
  if(actual === expected){
    return console.log(`🟢🟢🟢 Assertion Passed:  ${actual}  ===  ${expected}`)
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1)
  const array2 = Object.keys(object2)

  if(array1.length !== array2.length){
    return false
  } 
    for(let i of array1){
      if(Array.isArray(object1[i]) && Array.isArray(object2[i])){
        if(!eqArrays(object1[i], object2[i])){
          return false
        }
      } 
      else {
        if (object1[i] !== object2[i]){
          return false;
      }
      } 
      
    }
    return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)); // => false

console.log(eqObjects({a: [1, 2], b: 3}, {a: [1, 2], b: 4}));// => false