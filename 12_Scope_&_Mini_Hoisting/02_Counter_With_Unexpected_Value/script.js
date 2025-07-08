/* Problem:
Why does this counter show undefined?
Task:
-> Predict what gets logged and why.
-> Rewrite it using let to fix the mini-hoisting issue.
-> Practice: var hoisting vs let.
*/

// Solution:

function startCounter() {
  console.log(count); // undefined
  // The variable `count` is declared but not initialized before this line, so it logs
  // `undefined`. This is due to JavaScript's hoisting behavior, where variable declarations
  // are hoisted to the top of their scope, but not their initializations.
  var count = 0;
  count++;
  console.log(count); // 1
  // Now `count` is initialized to 0, and then incremented by 1
  // so it logs 1.
}

startCounter();


// Explanation:
// 1. The first console.log logs `undefined` because the variable `count` is declared but not initialized
//    at the time of the log statement. In JavaScript, variable declarations are hoisted to the top of 
//    their scope, but initializations are not. So, `count` is hoisted but remains `undefined` until the 
//    line where it is initialized.
// 2. The second console.log logs `1` because after the first log, `count` is initialized to `0` and 
//    then incremented by `1`, resulting in `1`.
// 3. The function `startCounter` demonstrates the concept of variable hoisting in JavaScript, where the 
//    declaration is moved to the top of the function scope, but the initialization happens at the line 
//    where it is defined.
// 4. To fix this issue and avoid the mini-hoisting problem, we can use `let` instead of `var`, which does
//    not hoist the variable declaration in the same way:  

function startCounterFixed() {
  let count = 0; // Using let to declare count
  console.log(count); // 0
  count++;
  console.log(count); // 1
}           

