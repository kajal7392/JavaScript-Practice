/* Question 5: Explicit Binding
Create a function introduce that logs a greeting message using this.name. Create an object user with a 
property name and use call() to invoke the introduce function with the user object. */

// Solution:

function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

const user = {
    name: "John"
};

greet.call(user);