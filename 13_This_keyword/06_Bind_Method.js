/* Question 6: Using bind()
Write a function showAge that logs the age of a person. Create an object person with a property age. 
Use bind() to create a new function that is bound to the person object and call it. */

// Solution:

function showAge() {
    console.log(`My age is ${this.age}`);
}

const person = {
    age: 25
};

// new function which is bound to the person object
const bound = showAge.bind(person);

// call the method
bound();
