// Create a function generator genfib() that returns a function fib(),
// which always returns the next fibonacci number on each invocation
// (and returns 0 when being called the first time).

// https://www.codewars.com/kata/522498c9906b0cfcb40001fc

// Ex:
// var fib = genfib();
// fib(); // -> returns 0
// fib(); // -> returns 1
// fib(); // -> returns 1
// fib(); // -> returns 2

// function genfib() {
//   var a = 1,
//     b = 0;
//   return function fib() {
//     var c = a + b;
//     a = b;
//     b = c;
//     return a;
//   };
// }

function genfib() {
  var fibonacci = (function*() {
    var [curr, next] = [0, 1];
    while (true) {
      yield curr;
      [curr, next] = [next, curr + next];
    }
  })();
  return function fib() {
    return fibonacci.next().value;
  };
}

export { genfib };
