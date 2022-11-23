//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
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

const middle = function (array){
  let newarray = [];
  let numlength = 0;

if(array.length === 1 || array.length === 2){
  return newarray;
} else if (array.length % 2 !== 0){
  numlength = Math.floor(array.length / 2);
  //console.log(numlength);
  newarray.push(array[numlength]);
  return newarray;
} else if (array.length % 2 === 0){
  numlength = Math.floor(array.length / 2);
  //console.log(numlength);
  newarray.push(array[numlength - 1], array[numlength]);
  return newarray;
}

}
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]));// =>[5]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]