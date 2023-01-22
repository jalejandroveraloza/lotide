const assertEqual =  function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢Assertion Passed:  ${actual}  ===  ${expected}`);
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

const eqArrays = function(array, array2) {
  return JSON.stringify(array) === JSON.stringify(array2);
};

const without = function(_source, itemsToRemove) {
  let newarray = [];
  
  for (let i of _source) {
    let found = false;
    for (let x of itemsToRemove) {
      if (i === x) {
        found = true;
      }
    }
    if (found === false) {
      newarray.push(i);
    }
  }
  return newarray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [3])); //=> [1, 2]