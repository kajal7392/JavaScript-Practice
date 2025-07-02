/* Task:
-> Given an array of numbers,
-> Double each number (map)
-> Keep only even numbers (filter) 
*/

let numbers = [1,2,3,4,5,6];

// Using Map
const double = numbers.map(num => num*2);
console.log("Double Numbers: ", double);

// Using filter
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers: ", evens);