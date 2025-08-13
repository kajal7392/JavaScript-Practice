//  Create a counter module using an IIFE that has methods to increment, decrement, and reset the counter. 
// Ensure the counter cannot be accessed directly from outside the module.

var Counter = (function() {
    var count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    }
}) ();

console.log(Counter.increment());
console.log(Counter.decrement());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.reset());