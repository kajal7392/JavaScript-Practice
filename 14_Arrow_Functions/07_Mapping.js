/* Question 7: Mapping with Arrow Functions
You are tasked with transforming an array of strings into an array of their lengths. Write a function that
takes an array of strings and returns an array of numbers representing the lengths of those strings using 
an arrow function. */

// Solution:

const words = ["apple", "bananas", "Cherry", "date"];

const getStringsLengths = (strings) => strings.map(str => str.length);

const lengths = getStringsLengths(words);
console.log(lengths);