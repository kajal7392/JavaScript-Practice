/* Create variables of all primitive types and check if:
     - They are primitive using typeof
     - Check one non-primitive like an object or array and print its type too   */

// Primitive Datatypes
const str = "Hello";  //String
const num = 42;  //Number
const bool = true;  //Boolean
const nll = null;  //Null
const undef = undefined;  //Undefined
const sym = Symbol('unique');  //Symbol

// Non-Primitive Datatypes
const obj = {name: "John"};  //Object
const array = [1,2,3];  //Array

//Check and log primitive types
console.log("Primitive Datatypes");
console.log("String: ", str, typeof str);
console.log("Number: ",num, typeof num);
console.log("Boolean: ", bool, typeof bool);
console.log("Null: ", nll, typeof nll);
console.log("Undefined: ", undef, typeof undef);
console.log("Symbol: ", sym, typeof sym);

//Check and log Non-Primitive Datatypes
console.log("\Non-Primitive Datatypes: ");
console.log("Object: ", obj, typeof obj);
console.log("Array", array, typeof array);



/* Run the following comparisons and comment on why the result is what it is:
     console.log(2 == "2");    // true or false? Why?
     console.log(2 === "2");   // true or false? Why?
     console.log(null == undefined);   // ?
     console.log(null === undefined);  // ?  */

     console.log(2 == "2"); //true, javascript converts the string "2" into number and then compares and 
     //thus returns true, it is loose comparison

     console.log(2 === "2");  //false, javascript checks the value and its type, does not perform type 
     // conversion, thus returns false, it is strict comparison

     console.log(null == undefined);  //true, special case, javascript checks the value of both, 
     // finds empty and thus returns true, it is loose comparison

     console.log(null === undefined);  //false, javascript checks the datatype and value of both,
     // both are of different types, thus returns false, strict comparison




/* You have:
     let number = "50";
     let result = num + 10;
   - Print result and typeof result
   - Fix it so the result becomes 60 (as a number) */

// Before type conversion
/*let number = "50";
let result = number + 10;
console.log(num2, typeof number);
console.log(result, typeof result); */

// After Typeconversion, convert string to number
let number = "50";
number = Number(number);  //convert String to Number
let result = number + 10;  
console.log(result, typeof result);  //Output will be Number




/* Write a function validateData(value) that:
     - Checks the type of the value using typeof
     - Logs whether it is string, number, or boolean
     - If value is null, print "Null value provided" */
function validateData(value) {
     if(value === null) {
          console.log("Null value is provided");
          return;  //Exit the function
     }

     // Check the type of value using typeof
     const type = typeof value;

     // Log the type of value
     if(type === "string") {
          console.log("The value is a string")
     } else if(type === "number") {
          console.log("The value is a number");
     }
     else if(type === "boolean") {
          console.log("The value is a boolean");
     }
     else if(type === "bigint") {
          console.log("The value is bigint");
     }
     else if(type === "object") {
          console.log("The value is an object");
     }
     else if(type === "array") {
          console.log("The value is array")
     }
     else {
          console.log("The value is of other type")
     }
}
     validateData("Hello");  //string
     validateData(42);  //number
     validateData(true);  //boolean
     validateData(334209755555555555n);  //big integer
     validateData({});  //object
     validateData([]);  //array




/* Auto Type Conversion Test
     Create 3 variables:
      let a = "5";
      let b = 3;
      let c = true;
   Print results of:
     a + b
     a * b
     c + b
     c * a
   Then explain each output (why is it that value and type?).  */
let a = "5";
let b = 3;
let c = true;
console.table(["string + number: ",(a+b), typeof (a+b),
      "string * number: ", (a*b), typeof (a*b),
      "boolean + number: ", (c+b), typeof (c+b),
      "boolean * string: ", (c*a), typeof (c*a)
     ]);

/* Explanation:
1. (a+b) -> string + number  //Output: 53
   The '+' operator prefers string concatenation when one operand is a string. JavaScript converts 
   'b' (number) to a string and concatenates.
2. (a*b) -> string * number  //Output: 15
   The '*' operator forces numeric conversion. JavaScript converts a (string "5") to a number before 
   multiplication.
3. (c+b) -> boolean + number  //Output: 4
   The '+' operator converts 'c' (boolean true) to its numeric equivalent (1) when added to a number.
4. (c*a) -> boolean * string  //Output: 5
   The '*' operator forces both operands to numbers. true becomes '1', and "5" becomes '5'.    */





/* Mini Summary Task
   - Create a table (in comments or console.table())
   - Show the difference between Primitive and Non-Primitive datatypes:
   | Type     | Example Value     | typeof Result | Mutable |
   | -------- | ----------------- | ------------- | ------- |
   | string   | "Kajal"           | ?             | No      |
   | number   | 42                | ?             | No      |
   | object   | { name: "Kajal" } | ?             | Yes     |
   | array    | \["A", "B"]       | ?             | Yes     |
   | function | function() {}     | ?             | Yes     |

You can use console.table() or comment block to represent this.  */
const dataTypes = [
    { Type: "string", ExampleValue: "Kajal", typeofResult: typeof "Kajal", Mutable: "No" },
    { Type: "number", ExampleValue: 42, typeofResult: typeof 42, Mutable: "No" },
    { Type: "object", ExampleValue: { name: "Kajal" }, typeofResult: typeof { name: "Kajal" }, Mutable: "Yes" },
    { Type: "array", ExampleValue: ["A", "B"], typeofResult: typeof ["A", "B"], Mutable: "Yes" },
    { Type: "function", ExampleValue: function() {}, typeofResult: typeof function() {}, Mutable: "Yes" }
];

console.table(dataTypes);














