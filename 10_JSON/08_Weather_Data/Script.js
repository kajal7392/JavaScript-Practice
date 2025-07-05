/*  Weather Data API Integration 
Problem:
You fetch weather data from a public API which returns JSON.
Write a script that:
-> Receives JSON like { "city": "Mumbai", "temperature": 34, "humidity": 75, "conditions": "Sunny" }
-> Parses the JSON to an object.
-> Updates the weather info on a web page.
-> Bonus: Convert the updated weather object back to JSON to “send to another service.”

Key concepts:
✅ API response parsing
✅ JSON round-trip: object ➜ string ➜ object
*/


// Solution:

// Example weather data
const weatherData = { "city": "Mumbai", "temperature": 34, "humidity": 75, "conditions": "Sunny" };

// parse the json to object 
const parsedData = JSON.parse(weatherData);
console.log(`Current weather in ${weatherData.city} is ${weatherData.temperature}, ${weatherData.conditions}`);

// Object data into JSON conversion
const updatedWeatherJSON = JSON.stringify(parsedData);
console.log(`Sending weather data`, updatedWeatherJSON);
