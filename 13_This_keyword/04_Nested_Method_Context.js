/* 
Question 4: Nested Method Context
Create an object named `user` with a property `name` and a method `greet`. 
Inside `greet`, define another function `sayHi` that logs a message using the user's name.

Use the `this` keyword correctly so that `sayHi` has access to the user's name.
Call `user.greet()` and ensure it displays: "Hi, I am <user's name>".
*/

// Solution:
const user = {
    name: "John",
    greet: function () {
        const self = this; 
        function sayHi() {
            console.log(`Hi, I am ${self.name}`);
        }
        sayHi(); 
    }
};

user.greet(); 
