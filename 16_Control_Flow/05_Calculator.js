/* Write a simple calculator program that takes two numbers and an operator (+, -, *, /) as input and 
performs the corresponding operation. Use a switch statement to handle the different operations.

Example Input/Output:

Input: 5, 3, + → Output: 8
Input: 10, 2, / → Output: 5
*/


// Solution:

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter first number: ", (num1) => {
    readline.question("Enter second number: ", (num2) => {
        readline.question("Enter operator (+, -, *, /): ", (operator) => {
            // Convert inputs to numbers
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;
            
            // switch to handle different operations
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        console.log("Error: Division by zero!");
                        readline.close();
                        return;
                    }
                    break;
                default:
                    console.log("Invalid operator! Please use +, -, *, or /");
                    readline.close();
                    return;
            }
            
            // Display the result
            console.log(`Result: ${result}`);
            readline.close();
        });
    });
});
