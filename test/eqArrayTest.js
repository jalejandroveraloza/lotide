const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');

console.log(eqArray([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArray([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArray(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArray(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true); // => should PASS