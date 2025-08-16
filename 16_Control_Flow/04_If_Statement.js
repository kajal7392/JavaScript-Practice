/* Create a program that takes a number as input and determines whether it is even or odd. Use an if 
statement to check the condition.

Example Input/Output:

Input: 4 → Output: Even
Input: 7 → Output: Odd
*/

// Solution:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter the number: ", (input) => {
    const number = parseInt(input);
    if(input % 2 == 0) {
        console.log("Even Number");
    } else {
        console.log("Odd Number");
    }
    readline.close();
});
