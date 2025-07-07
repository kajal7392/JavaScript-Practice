/* Global vs Local Scope Debugging
Problem:
-> Write a script with:
-> A global variable count = 0.
-> A function increment() that declares let count = 10 inside the function and adds 1 to it.
-> Call increment() and then log the global count.

Task:
Explain why the global count did not change.
Fix it by using the global variable properly.
*/

// Solution:
let count = 0; // Global variable
function increment() {
    let count = 10; // Local variable, shadows the global variable
    count += 1; // This modifies the local count, not the global one
}
increment();
console.log(count); // Logs 0, because the global count was not modified

// Fixing the issue by using the global variable properly
let globalCount = 0; // Global variable
function increment() {
    globalCount += 1; // Modify the global variable directly
}
increment();
console.log(globalCount); // Logs 1, now the global count is modified correctly


// Explanation:
// In the original code, the local variable `count` inside the `increment` function shadows
// the global variable `count`. When `increment` is called, it modifies the local `count`
// which does not affect the global `count`. By using `globalCount` and modifying it
// directly, we ensure that the global variable is updated as intended.
// This demonstrates the importance of understanding variable scope in JavaScript.
