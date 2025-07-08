/* Problem:
You’re looping over elements and adding event listeners.
Task:
-> Predict what will log after 1 second.
-> Rewrite it using let to get the expected output.
*/

// Solution:

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Logs 3 three times
  }, 1000);
}

for(let i=0; i<3; i++) {
    setTimeout(() => {
        console.log(i); // Logs 0, 1, 2
    }, 1000);
}

// Explanation:
// 1. In the first loop using `var`, the variable `i` is function-scoped, meaning it is shared across all 
//    iterations of the loop.
// 2. By the time the `setTimeout` callback executes after 1 second, the loop has completed and `i` is
//    equal to 3.
// 3. Therefore, the callback logs `3` three times.
// 4. In the second loop using `let`, the variable `i` is block-scoped, meaning each iteration of the 
//    loop has its own instance of `i`.
// 5. When the `setTimeout` callback executes, it logs the value of `i` for each iteration, which is `0`, `1`, and `2` respectively.
// 6. This demonstrates the difference between `var` and `let` in terms of scope and how they affect 
//    closures in JavaScript.
// 7. Using `let` allows each iteration to have its own scope, preventing the closure from capturing the 
//    same variable across iterations.
// 8. This is a common pitfall in JavaScript when using `var` in loops with asynchronous callbacks,
//    and using `let` is a common solution to avoid this issue. 