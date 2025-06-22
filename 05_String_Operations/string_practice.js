/* Q1: Basic String Properties
    let message = "  Hello Kajal!  ";

    console.log("Length:", message.length);
    console.log("Trimmed:", message.trim());
    console.log("Uppercase:", message.toUpperCase());
    console.log("Includes 'Kajal'?", message.includes("Kajal"));

  Try this and add 1 line of your own (e.g., slice, replace, or startsWith)
  Comment what each does and why it’s useful.  */

// Solution:
let message = "  Hello Kajal!  ";

console.log("Length:", message.length); // Outputs the length of the string, including spaces. 
// Useful for knowing the size of the string.
console.log("Trimmed:", message.trim()); // Removes whitespace from both ends of the string. 
// Useful for cleaning up user input.
console.log("Uppercase:", message.toUpperCase()); // Converts the entire string to uppercase. 
// Useful for standardizing text for comparison or display.
console.log("Includes 'Kajal'?", message.includes("Kajal")); // Checks if the substring "Kajal" exists in
// the string. Useful for validation or searching.
console.log("Sliced:", message.slice(2, 7)); // Extracts a portion of the string from index 2 to index 7
//  (not inclusive). Useful for getting a substring or specific part of the string.





/* Q2: String Immutability
    let name = "Kajal";
    name[0] = "M";
    console.log(name);  // What do you expect?
 Explain what happened and why strings are immutable in JS */

 // Solution:
 let name = "Kajal";
 name[0] = "M";  //Attempting to change the first character
 console.log(name);  // String will remain unchanged, i.e. Output: Kajal

/* Explanation:
 1. When you attempt to change the first character of the string name by using name[0] = "M";, 
    nothing happens. The string remains "Kajal". This is because strings in JavaScript are immutable, 
    meaning that once a string is created, it cannot be changed or modified.

 2. Why Strings are Immutable in JavaScript:
    -> Memory Efficiency: Immutability allows JavaScript engines to optimize memory usage. 
       When strings are immutable, the engine can safely share and reuse string instances without 
       worrying about them being altered.
    -> Performance: Immutable strings can lead to performance improvements in certain operations, as the 
       engine can make assumptions about the string's state. For example, it can cache the string's 
       hash value for faster comparisons.
    -> Simplicity: Immutability simplifies the programming model. Since strings cannot be changed, you 
       can be sure that any reference to a string will always point to the same value, reducing the 
       chances of bugs related to unintended modifications.
*/




/* Q3: Format a User Input Name
  Write a function formatName(name) that:
  - Trims leading/trailing spaces
  - Capitalizes only the first letter, rest lowercase                                                                           formatName("  kAjAL  ") ➞ "Kajal"
  Use .trim(), .toLowerCase(), .charAt(), .slice()   */

// Solution:
function formatName(name) {
    // Step 1: Trim leading/trailing spaces
    const trimmedName = name.trim();
    
    // Step 2: Convert the entire string to lowercase
    const lowerCaseName = trimmedName.toLowerCase();
    
    // Step 3: Capitalize the first letter
    const formattedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
    
    return formattedName;
}

// Test the function
console.log(formatName("  kAjAL  ")); // Output: "Kajal"





/*  Q4: Custom stringInfo() Function
  Write a function that takes a string and prints:
  - Length
  - First & last character
  - Whether it includes "@"
  - Reversed string   */

// Solution:
function stringInfo(str) {
    // Trim the string first to handle edge cases with spaces
    const trimmedStr = str.trim();

    // 1. Length of the string (after trimming)
    console.log("Length:", trimmedStr.length);

    // 2. First and last character
    console.log(
        "First & last character:", 
        trimmedStr.charAt(0), 
        trimmedStr.charAt(trimmedStr.length - 1)
    );

    // 3. Check if it includes "@"
    console.log(
        "Includes '@'?:", 
        trimmedStr.includes("@") 
            ? "Yes" 
            : "No"
    );

    // 4. Reversed string
    console.log(
        "Reversed:", 
        trimmedStr.split("").reverse().join("")
    );
}

// Example usage:
stringInfo("  Hello@World  ");


