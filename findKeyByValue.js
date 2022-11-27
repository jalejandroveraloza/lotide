const assertEqual =  function(actual, expected){
  if(actual === expected){
    return console.log(`🟢🟢🟢 Assertion Passed:  ${actual}  ===  ${expected}`)
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};


const findKeyByValue = function (object, value){
//console.log(Object.keys(object));
let keyArray = [];
//keyArray = Object.keys(object);
//console.log(keyArray);
for(const key in object){
 if(object[key] === value){
  return key;
 } 

}

}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "300"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "300"), "action"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined))