/* Write a program that takes a student's score as input and outputs the corresponding grade based on the
following criteria:

A: 90 and above
B: 80 to 89
C: 70 to 79
D: 60 to 69
F: Below 60
Example Input/Output:

Input: 85 → Output: Grade: B
Input: 45 → Output: Grade: F */


// Solution:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter the student\'s score: ', (score) => {
    score = Number(score); // Convert input to a number
    
    if(score >= 90) {
        console.log("Grade: A");
    } else if(score > 80 && score < 89) {
        console.log("Grade: B");
    } else if(score > 70 && score < 79) {
        console.log("Grade: C");
    } else if(score > 60 && score < 69) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }

    readline.close();
});