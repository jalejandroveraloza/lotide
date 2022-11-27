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
  let array1 = []
  let array2 = []

  array1 = Object.keys(object1)
  array2 = Object.keys(object2)

  //console.log(array1.length)
  //console.log(array2.length)

  if(array1.length === array2.length){
    for (const key of array1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
       return eqArrays(object1[key], object2[key]);
      }
     if(object1[key] !== object2[key]){
        return false
     }
    //return true
  } 
  return true
  } else {
    return false;
}
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false)); // => false