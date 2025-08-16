/* Write a program that takes a number (1-7) as input and outputs the corresponding day of the week using
a switch statement. If the input is not between 1 and 7, output "Invalid day".

Example Input/Output:

Input: 3 → Output: Wednesday
Input: 8 → Output: Invalid day
*/

// Solution:
const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});
readline.question("Enter the number: ", (input) => {
    const number = parseInt(input);
    switch(number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
    }
    readline.close();
});