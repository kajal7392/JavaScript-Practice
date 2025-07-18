/* Question 3: Arrow Function Context
Create an object counter with a property count initialized to 0 and a method increment that uses an arrow 
function to increase the count by 1 and log the current count. Call the increment method multiple times. */

// Solution:

counter = {
    count: 0,
    increment: function() {
        const increase = () => {
            this.count++;
            console.log(`Current count: ${this.count}`);
        };
        increase();
    }
};
counter.increment();
counter.increment();
counter.increment();