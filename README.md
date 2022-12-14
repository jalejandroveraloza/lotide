# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jalejandroveraloza/lotide`

**Require it:**

`const _ = require('@jalejandroveraloza/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: brings the first value of an array, example returns 1 for [1, 2, 3]
* `tail(...)`: brings the tail of an array, pull the rest of the value without considering the first, example value returns [7, 9, 12, 16] for [5, 7, 9, 12, 16]
* `middle(...)`: brings the middle values of an array considering the number of elements, example returns [5] for [1, 2, 3, 4, 5, 6, 7, 8, 9] or another example returns [3, 4] for [1, 2, 3, 4, 5, 6]
* `eqArray(...)`: compare if two array are the same and returns true or false
* `assertEqual(...)`: compare numbers or strings, gets an actual and expected value 
* `assertArraysEqual(...)`: compare arrays, gets an actual and expected value
