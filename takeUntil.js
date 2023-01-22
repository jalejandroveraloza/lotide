// const takeUntil = function (array, callback){
// let newArray = [];
// //if(callback === false){
//   for(let index of array){
//   newArray.push(callback(index));
//   }
// }
//   return newArray;
// }

const takeUntil = function(array, callback) {

  let newArray = [];
  const end = callback;

  for (let value of array) {
    //console.log(value)
    if (end(value)) {
      return newArray;
    } else {
      newArray.push(value);
    }
  }
  return newArray;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);