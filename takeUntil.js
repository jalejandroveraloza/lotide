// const takeUntil = function (array, callback){
// let newArray = [];
// //if(callback === false){
//   for(let index of array){
//   newArray.push(callback(index));
//   }
// } 
//   return newArray;
// }

const takeUntil = function (array, callback){

const end = array.findIndex(callback);
//console.log(end)
return array.splice(0, end)
  
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1)

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);