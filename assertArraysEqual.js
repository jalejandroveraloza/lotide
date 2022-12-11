const eqArrays = function(array, array2){
  return JSON.stringify(array) === JSON.stringify(array2);
}

const assertArrayEqual =  function(actual, expected){
  
  if(actual.length !== expected.length){
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
    return;
  }  
  for(let i = 0; i < actual.length; i++){
    if(actual[i] !== expected[i]){
      console.log(actual[i])
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
    return;
    }
  }
  console.log(`🟢🟢🟢Assertion Passed:  ${actual}  ===  ${expected}`)
  
};

assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // => should PASS