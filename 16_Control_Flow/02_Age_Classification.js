/* Create a program that takes a person's age as input and classifies them into different age groups:

Child: 0 to 12
Teenager: 13 to 19
Adult: 20 to 64
Senior: 65 and above
Example Input/Output:

Input: 15 → Output: Teenager
Input: 70 → Output: Senior
*/


// Solution:
const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the age: ', (age) => {
    age = Number(age);
    if(age >= 0 && age <= 12) {
        console.log("Child");
    } else if(age >= 13 && age <= 19) {
        console.log("Teenager");
    } else if(age >=20 && age <=64) {
        console.log("Adult");
    } else {
        console.log("Senior");
    }
    readline.close();
});