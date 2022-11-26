const assertEqual =  function(actual, expected){
  if(actual === expected){
    return console.log(`🟢🟢🟢 Assertion Passed:  ${actual}  ===  ${expected}`)
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
  }
};

const countLetters = function (sentence){
  const results = {};
  for(const index of sentence){
    if (results[index]) { //if key is already there in your existing obj, 
      results[index] += 1;
    } else if(index !== ' '){// if key is not there and the key is not a space
      results[index] = 1;
      //results[index] = 0;
      
    }
   // else {
     // results[index] = 1;
    //}
  }
  return results
  }


console.log(countLetters('lighthouse in the house'));