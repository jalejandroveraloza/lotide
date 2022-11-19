// Function Implementation 
const asserEqual =  function(actual, expected){
  if(actual === expected){
    return console.log("🔴🔴🔴 Assertion Passed: "+ actual + " === " + expected)
  } else {
    return console.log("🟢🟢🟢 Assertion Failed: "+ actual + " !== " + expected)
  }
};

//Test code

asserEqual("Lighthouse labs", "Bootcamp");
asserEqual(1, 1);