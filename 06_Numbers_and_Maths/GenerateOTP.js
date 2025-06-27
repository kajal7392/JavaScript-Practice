/* Question - 3:
Q3: Real-World Task – Generate OTP
- Create a function generateOTP(length) that:
- Returns a random number of length digits
- Only numeric (0–9)

Example:
generateOTP(4); // ➞ 4927
generateOTP(6); // ➞ 801294

- Use Math.random() and string operations
- Make sure result is always exact digits (even if it starts with 0)
*/


// Solution:
function generateOTP(length) {
    let otp ='';
    for(let i=0; i<length; i++) {
        // Generate a random (0-9) digit and append to OTP String
        otp += Math.floor(Math.random()*10);
    }
    return otp;
}

// Examples:
console.log(generateOTP(4));  // 4- digit OTP
console.log(generateOTP(6));  // 6- digit OTP



/* Implementation Notes:
1. Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
2. Multiplying by 10 gives us a number between 0 and 9.999...
3. Math.floor() rounds down to get integers 0-9
4. Strings are used to preserve leading zeros
5. The loop runs exactly 'length' times to guarantee the exact digit count
*/