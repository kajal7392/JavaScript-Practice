//Create an array of 3 student objects with name, age, and isStudent. Display the array using 
// 'console.table(students);'.

let St_Name = "Alice";
let St_Age = 22;
let isStudent = true;

console.table([St_Name,St_Age,isStudent]);   //Displays all data at once in table format using index



//Write a function without "use strict" that assigns a value to an undeclared variable. Then add
//  "use strict" at the top and observe what changes.

//Without using strict mode
function WithoutStrictMode() {
    undeclaredVar = 10;  //Variable not declared here
    console.log("Without Strict mode, undeclared var =",undeclaredVar);   //prints the variable correctly
}
    WithoutStrictMode();

// Function with "use strict"
   function WithStrictMode() {
       "use strict"; // Enable strict mode
       try {
           undeclaredVar = 10;  // Attempting to assign to an undeclared variable
           console.log("With Strict mode, undeclared var =", undeclaredVar);  // This line will not execute
       } catch (error) {
           console.error("With strict mode error:", error.message); // Catch and log the error
       }
   }

   // Call the function
   WithStrictMode();
   


//Create variables of these types and log both the value and typeof:
// string, number, boolean, null, undefined, bigint, symbol, and object

const myString = "Hello world";  //String
const myNum = 42;  //Number
const myBoolean = true;  //Boolean
const myNull = null;  //Null
const myUndefined = undefined;  //Undefined
const myBigInt = BigInt(12345679012345678901234567890);  //BigInt
const mySymbol = Symbol("mySymbol");  //Symbol
const myObject = {key: "value"};  //Object

console.log("Value:", myString, "Type:", typeof myString);
console.log("Value:", myNum, "Type:", typeof myNum);
console.log("Value:", myBoolean, "Type:", typeof myBoolean);
console.log("Value:", myNull, "Type:", typeof myNull);
console.log("Value:", myUndefined, "Type:", typeof myUndefined);
console.log("Value:", myBigInt, "Type:", typeof myBigInt);
console.log("Value:", mySymbol, "Type:", typeof mySymbol);
console.log("Value:", myObject, "Type:", typeof myObject);



//Create an object userProfile with name, age, and email. Log their types. Then, write logic that prints:
//"Email is valid" only if it's not undefined and includes "@"
//"Age is not provided" if it’s null or undefined

const userProfile = {
    name: "John Doe",
    age: null,
    email: "john@example.com"
};

console.log("Types:");
console.log("name:", typeof userProfile.name);
console.log("age:", typeof userProfile.age);
console.log("email:", typeof userProfile.email);

//Email validity
if(userProfile.email !== undefined && userProfile.email.includes("@")) {
    console.log("Email is valid");
}

//Check if age is provided or not
if(userProfile.age === null || userProfile.age === undefined) {
    console.log("Age is not provided");
}


/* You have the following code:
    let score = "100";
    score = score + 10;
   Print score and typeof score
   Then fix the logic so it actually adds 10 numerically (not as a string)
*/
let score = "100";
//score = score + 10;  //string concatenation will be done as "100" would be considered as a string not number
//console.log(score, typeof score);
//Fix the logic
score = Number(score);  //Type conversion, String to Number
score = score + 10;
console.log(score, typeof score);










