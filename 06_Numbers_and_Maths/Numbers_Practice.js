/* Question-1:
Q1: Type Conversion and parseInt, parseFloat
let strNum1 = "42";
let strNum2 = "42.67";
let invalid = "abc";

console.log(parseInt(strNum1));    // ?
console.log(parseFloat(strNum2));  // ?
console.log(Number(invalid));      // ?
Add 10 to strNum2 after converting it to a number

Add comments:
- What's the difference between parseInt, parseFloat, and Number()?
- What happens when conversion fails?
 */

// Solution:
let strNum1 = "42";
let strNum2 = "42.67";
let invalid = "abc";

console.log(parseInt(strNum1));    // 'parseInt' converts a string to number
console.log(parseFloat(strNum2));  // 'parseFloat' converts the string to the floating-point number
console.log(Number(invalid));      // 'Number' attempts to convert the string 'abc' to Number but couldn't as it is not a valid number and thus returns NaN(Not a Number)

// Add 10 to strNum2 after converting it to a number
let result = parseFloat(strNum2) + 10;
console.log(result);

/*
- What's the difference between parseInt, parseFloat, and Number()?
  - parseInt: Converts a string to an integer. It stops parsing when it encounters a non-numeric character and returns the integer part.
  - parseFloat: Converts a string to a floating-point number. It also stops parsing at the first non-numeric character but retains decimal points.
  - Number(): Attempts to convert the entire string to a number. If the string cannot be fully converted (like "abc"), it returns NaN.
- What happens when conversion fails?
  - When conversion fails, parseInt and parseFloat return the number they could parse (or 0 if nothing could be parsed), while Number() returns NaN (Not-a-Number) if the string cannot be converted to a valid number.
*/




/* Question-1:
Q2: Math Methods Exploration
let num = 7.6;

console.log(Math.floor(num));  // ?
console.log(Math.ceil(num));   // ?
console.log(Math.round(num));  // ?
console.log(Math.max(5, 9, 1)); // ?
console.log(Math.random());    // ?

Comment each output:
What’s the use case of each?
*/

// Solution:
let num = 7.6;
console.log(Math.floor(num));  // Outputs: 7
// Math.floor() rounds down to the nearest integer. 
// Use case: When you need the largest integer less than or equal to a given number.

console.log(Math.ceil(num));   // Outputs: 8
// Math.ceil() rounds up to the nearest integer. Use case: When you need the 
// smallest integer greater than or equal to a given number.

console.log(Math.round(num));  // Outputs: 8
// Math.round() rounds to the nearest integer. Use case: When you want to round 
// a number to the nearest whole number based on standard rounding rules.

console.log(Math.max(5, 9, 1)); // Outputs: 9
// Math.max() returns the largest of the given numbers. Use case: To find the 
// maximum value in a set of numbers.

console.log(Math.random());    // Outputs: A random number between 0 (inclusive) 
// and 1 (exclusive) Math.random() generates a pseudo-random floating-point number. 
// Use case: Useful for generating random values, such as in games
//  or simulations..random());    
