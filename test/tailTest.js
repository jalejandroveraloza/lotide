const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail');



describe("#tail", () => {
  it("returns [7] for [5, 7]", () => {
    assert.deepEqual(tail([5, 7]), [7]);
  });

  it("returns [7, 9, 12, 16] for [5, 7, 9, 12, 16]", () => {
    assert.deepEqual(tail([5, 7, 9, 12, 16]), [7, 9, 12, 16]);
  });


});