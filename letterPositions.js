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

const eqArrays = function(array, array2){
  return JSON.stringify(array) === JSON.stringify(array2);
}


const letterPositions = function (sentence){
  const results = {};
  let arrayIndex = [];
  // logic to update results here
  for(let index = 0; index < sentence.length; index++){
    //console.log(sentence[index])
    // sentence = a; sentence[index]
    // results = { results[a]
    //  a: [0],
    //}
    if (results[sentence[index]]) { //if key is already there in your existing obj, 
      //results[index] += 1;
      //arrayIndex.push(index);
      results[sentence[index]].push(index)
    } else if(sentence[index] !== ' '){// if key is not there and the key is not a space
      results[sentence[index]] = [];
      results[sentence[index]].push(index) 
    }
   
  }
  return results
  }

  //console.log(letterPositions("lighthouse in the house"))
  console.log(assertArrayEqual(letterPositions("hello").e, [1]));
  