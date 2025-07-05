/* User Authentication Token
Problem:
You receive a JSON Web Token (JWT) as a JSON string when a user logs in.
Write a function that:
-> Receives a JWT JSON string { "token": "abc123xyz", "expiry": "2025-07-05T12:00:00Z" }
-> Parses it into an object.
-> Checks if the token is valid based on the expiry.
-> Stores the token in an object or localStorage.

Key concepts:
✅ Parse JSON securely
✅ Handle date comparisons 
*/

// Solution:

//1. Receive JWT response
const jwtResponse = {
    "token" : "abc123xyz",
    "expiry" : "2025-07-05T12:00:00Z"
};

//2. Parse JSON data into Object
const jwtData = JSON.parse(jwtResponse);
console.log("Parsed data: ", jwtData);

//3. Check expiry
const now = new Date();   //current date
const expiry = new Date(jwtData.expiry);

if(now < expiry) {          // Compare expiry date with current date
    console.log("Token is valid");
} else {
    console.log("Token has expired");
}

//4. Store the token in an localstorage
localStorage.setItem("JWT Token: ", jwtData.token);
console.log("Data stored successfully: ", jwtData.token);
