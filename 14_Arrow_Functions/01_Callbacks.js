/* Question 1: Simplifying Callbacks
You are working on a project that processes an array of user objects. Each user object contains a 
name and an age. Write a function that takes an array of users and returns an array of names of users 
who are 18 years or older using arrow functions.
*/

// Solution:

const users = [
    {name: "Kajal", age: 23},
    {name: "Neha", age: 22},
    {name: "Amit", age: 17},
    {name: "Ratna", age: 20},
    {name: "Anshika", age: 18}
];

const getAdultUsers = (users) => users.filter(user => user.age >= 18).map(user => user.name);


console.log(getAdultUsers(users));