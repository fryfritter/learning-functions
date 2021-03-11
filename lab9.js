const assertEquals = require("./assert-helper");

/**
 * from Wiki:
 * Fibonacci numbers,
 * commonly denoted Fn form a sequence,
 * called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones,
 * starting from 0 and 1.
 *
 * fib 0 => 0
 * fib 1 => 1
 * fib 2 => fib 0 + fib 1 => 0 + 1 => 1
 * fib 3 => fib 2 + fib 1 => 1 + 1 => 2
 * fib 4 => fib 3 + fib 4 => 2 + 1 => 3
 * fib 5 => fib 3 + fib 4 => 2 + 3 => 5
 * fib 6 => fib 4 + fib 5 => 3 + 5 => 8
 */
function fib() {
  // TODO: your code here
}

assertEquals(fib(0), 0);
assertEquals(fib(1), 1);
assertEquals(fib(2), 1);
assertEquals(fib(3), 2);
assertEquals(fib(4), 3);
assertEquals(fib(5), 5);
assertEquals(fib(6), 8);
assertEquals(fib(39), 63245986);
