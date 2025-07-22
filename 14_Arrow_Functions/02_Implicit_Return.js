/* Question 2: Implicit Return
Create a function that takes an array of numbers and returns a new array containing the squares of those 
numbers using an arrow function with implicit return.
*/

// Solution:

const numbers = [2,4,6,8,10];
const squares = numbers.map(num => num*num);
console.log(squares);