/* Problem:
This fails with TypeError: greet is not a function:

console.log(greet());  // ?
var greet = function() {
  return "Hello!";
};


But this works:

console.log(greet());  // ?
function greet() {
  return "Hello!";
}

Task:
-> Explain why function declarations are fully hoisted, but function expressions are not.
-> Rewrite the broken one to work properly.
*/

// Solution:


console.log(greet());  // undefined
// The above line logs `undefined` because the variable `greet` is hoisted,
// but its assignment as a function expression is not. At the time of the console.log,
// `greet` is declared but not yet assigned a value, so it is `undefined
var greet = function() {
  return "Hello!";
};

// Explanation:
// To fix the issue, we can use a function declaration instead of a function expression.

console.log(greet());  // Hello!
// The above line logs "Hello!" because now `greet` is assigned a function expression
// after the first console.log, so it works as expected.
function greet() {
  return "Hello!";
}