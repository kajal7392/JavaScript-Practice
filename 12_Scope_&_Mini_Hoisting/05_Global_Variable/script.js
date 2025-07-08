/* Problem:
Imagine you have a script with a global variable:

var apiKey = "12345";
function getWeather() {
  console.log(apiKey);
}
getWeather();

Now you add another module that needs a different apiKey:
Task:
-> Predict both outputs.
-> Explain how they conflict.
-> Rewrite using block scope or IIFE or const in modules to prevent global pollution.
*/

// Solution:

var apiKey = "12345";

function getWeather() {
  console.log(apiKey);  // This will log "12345"
}

getWeather();

var apiKey = "ABCDE"; // This will overwrite the previous apiKey
function getMaps() {
  console.log(apiKey); // This will log "ABCDE" 
} 
getMaps();
