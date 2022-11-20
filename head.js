// Function Implementation 
const assertEqual =  function(actual, expected){
  if(actual === expected){
    return console.log(`🔴🔴🔴 Assertion Passed:  ${actual}  ===  ${expected}`)
  } else {
    return console.log(`🟢🟢🟢 Assertion Failed: ${actual} !== ${expected}`)
  }
  
};

function head (actual, expected) {
  
    let array1 = actual[0];
    return console.log(array1);
  
   /* let array2 = expected[0];
    return console.log(array2);*/
}

//Test code

assertEqual(head([8,6,7]), 5);
assertEqual(head(["Hola", "Lighthouse", "Labs"]), "Hello");