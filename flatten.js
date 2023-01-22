const flatten = function(nestedArray) {
  let flattened = [];

  if (!Array.isArray(nestedArray)) {
    return false;
  }

  for (let i = 0; i < nestedArray.length; i++) {
  
    if (Array.isArray(nestedArray[i])) {
      flattened = flattened.concat(flatten(nestedArray[i]));
    } else {
      flattened.push(nestedArray[i]);
    }
  }
  return flattened;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten("HOla"));