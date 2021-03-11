const assertEquals = require("./assert-helper");

// 1. write a function that returns the area of a triangle
function getAreaOfTriangle(base, height) {
  // fill in the function code
}

assertEquals(getAreaOfTriangle(3, 8), 12);

// 2. write a function that returns the area of a square
// with the `length` parameter with a default value 5

// function getAreaOfSquare...

assertEquals(getAreaOfSquare(10), 100);

assertEquals(getAreaOfSquare(), 25);

// 3. using rest parameters, return the smallest number
function getSmallest(...rest) {
  // TODO: your code here
}

assertEquals(getSmallest(1, 2, 3, 4, 6, 7, 8), 1);

assertEquals(getSmallest(100, 100, 8, 8), 8);

// 4. Create a IIFE and that console.log a hello text immediately
