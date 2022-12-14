const head = require('./head');
const tail = require('./tail');
const middle = require('./middle')
const assertEqual = require('./assertEqual')
const eqArray = require('./eqArray')
const assertArraysEqual = require('./assertArraysEqual')

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertEqual: assertEqual,
  eqArray: eqArray,
  assertArraysEqual: assertArraysEqual,
};