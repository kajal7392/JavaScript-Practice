/* Create a program that takes a temperature in Celsius and converts it to Fahrenheit or vice versa based
 on user input. Use if-else statements to determine the conversion direction.

Example Input/Output:

Input: 100, C → Output: 212°F
Input: 32, F → Output: 0°C
*/

// Solution:

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertTemperature() {
    readline.question("Enter temperature value: ", (temp) => {
        readline.question("Enter scale (C for Celsius, F for Fahrenheit): ", (scale) => {
            // Convert input to number
            temp = parseFloat(temp);
            let convertedTemp;
            let convertedScale;

            // Validate input
            if (isNaN(temp)) {
                console.log("Error: Temperature must be a number");
                readline.close();
                return;
            }

            // Perform conversion
            if (scale.toUpperCase() === 'C') {
                convertedTemp = (temp * 9/5) + 32;
                convertedScale = 'F';
                console.log(`${temp}°C = ${convertedTemp.toFixed(1)}°F`);
            } 
            else if (scale.toUpperCase() === 'F') {
                convertedTemp = (temp - 32) * 5/9;
                convertedScale = 'C';
                console.log(`${temp}°F = ${convertedTemp.toFixed(1)}°C`);
            }
            else {
                console.log("Error: Invalid scale. Please enter 'C' or 'F'");
                readline.close();
                return;
            }

            // Offer to convert again
            readline.question("Convert another? (Y/N): ", (answer) => {
                if (answer.toUpperCase() === 'Y') {
                    convertTemperature(); // Recursive call
                } else {
                    console.log("Goodbye!");
                    readline.close();
                }
            });
        });
    });
}

// Start the program
console.log("=== Temperature Converter ===");
convertTemperature();

