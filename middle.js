//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
//const eqArray = require('./eqArray');

const assertArraysEqual = require('./assertArraysEqual')


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

module.exports = middle;
