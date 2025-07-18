/* Question 7: Nested Functions
Create an object teacher with a property name and a method sayHello that defines a nested function. 
Ensure that the nested function correctly accesses the name property using this. */

// Solution:

const teacher = {
    name: "Mrs. Jyoti Singh",
    sayHello: function() {
        const self = this;
        function NestedFunction() {
            console.log(`${self.name}`);
        }
        NestedFunction();
    }
}

teacher.sayHello();