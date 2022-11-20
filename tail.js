const assertEqual =  function(actual, expected){
  if(actual === expected){
    return console.log(`🟢🟢🟢Assertion Passed:  ${actual.length}  ===  ${expected.length}`)
  } else {
    return console.log(`🔴🔴🔴 Assertion Failed: ${actual.length} !== ${expected.length}`)
  }
  
};

const tail = function(array){
  
   return array.slice(1)
  } 
    
  
  /*if(expected.length > 1){
    return expected.slice(1);
  } else {
    return expected;
  }*/
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assertEqual(result.length, 2); // ensure we get back two elements
  assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
  assertEqual(result[1], "Labs"); // ensure second element is "Labs"