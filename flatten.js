const flatten = function (nestedArray){
  
if(Array.isArray(nestedArray)){
  return nestedArray.flat();
  /*for(let i = 0; i < nestedArray.length; i++){
    flattenArray.push(nestedArray[i])
  } */
} else {
  console.log('This is not an array, try again');
}

}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
console.log(flatten("HOla"));