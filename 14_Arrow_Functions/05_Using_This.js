/* Question 5: Using this with Arrow Functions
You are creating a simple counter object that has a count property and methods to increment and display 
the count. Use an arrow function for the display method to ensure it correctly accesses the count 
property. */

// Solution:

const counter = {
    count: 0,
    increment() {
        this.count++;
    },
    display() {
        const show = () => {
            console.log(`Current count: ${this.count}`);
        };
        show();
    }
};
counter.increment();
counter.display();