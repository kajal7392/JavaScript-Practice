/* Core practice of how JavaScript handles date and time. */

// Current Date and Time
const now = new Date();
console.log("Current Date & Time:", now);

// Specific Date (YYYY, MM (0-11), DD, HH, MM, SS)
const birthday = new Date(2000, 0, 1);  // Jan 1, 2000
console.log("Birthday:", birthday);

// Date Parts
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth());      // 0–11
console.log("Date:", now.getDate());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// Timestamp (milliseconds since Jan 1, 1970)
console.log("Timestamp:", now.getTime());
