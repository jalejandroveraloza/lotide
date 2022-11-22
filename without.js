const assertEqual =  function(actual, expected){
  if(actual === expected){
    return console.log(`🟢🟢🟢Assertion Passed:  ${actual}  ===  ${expected}`)
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
  
};

const eqArrays = function(array, array2){
  return JSON.stringify(array) === JSON.stringify(array2);
}

const without = function(_source, itemsToRemove){
  let newarray = []
  for (let i = 0; i < _source.length; i++){
    
    if(_source[i] !== itemsToRemove[i]) {
      newarray.push(_source[i])
    }
  }
  return newarray
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]