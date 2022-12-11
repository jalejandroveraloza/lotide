const findkey = function (object1, callback){
for(let key in object1){
  for(let key2 in object1[key]){
    //console.log(object1[key][key2]);
  
  //console.log(object1[key]['stars'])
if(object1[key][key2] === callback){
  return key;
}
}
}
}

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

const results1 = findkey(object, x => x.stars === 2);

console.log(results1);
