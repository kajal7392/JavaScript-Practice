/* let name1 = "Kajal";
   let name2 = name1;

   name2 = "Sharma";

   console.log("name1:", name1);  // ?
   console.log("name2:", name2);  // ?
   Comment: Why changing name2 didn't change name1? */
let name1 = "Kajal";
let name2 = name1;

name2 = "Sharma";

console.log("name1:", name1);  // ?
console.log("name2:", name2);  // ?

/* Output will be: 
     name1: Kajal
     name2: Sharma
*/

/* Explanation:
- Assignment of name1: name1 is assigned the string "Kajal".
- Assignment of name2: When you do let name2 = name1;, you are copying the value of name1 into name2. 
  At this point, both name1 and name2 hold the value "Kajal", but they are separate variables.
- Changing name2: When you change name2 to "Sharma", you are not modifying the original string "Kajal"; 
  instead, you are creating a new string "Sharma" and assigning it to name2. The original name1 remains 
  unchanged.  */






/* let user1 = { email: "kajal@mail.com" };
   let user2 = user1;
   user2.email = "sharma@mail.com";

   console.log("user1.email:", user1.email);  // ?
   console.log("user2.email:", user2.email);  // ?
     Comment: Why did both change?
*/
let user1 = { email: "kajal@mail.com" };
let user2 = user1;

user2.email = "sharma@mail.com";

console.log("user1.email:", user1.email);  // ?
console.log("user2.email:", user2.email);  // ?
/* Explanation:
- Assignment of user1: user1 is created as an object with a property email set to "kajal@mail.com".
- Assignment of user2: When you do let user2 = user1;, you are not creating a new object. Instead, 
  user2 is now a reference to the same object that user1 points to. Both user1 and user2 refer to the 
  same memory location.
- Changing user2.email: When you change user2.email to "sharma@mail.com", you are modifying the email 
  property of the object that both user1 and user2 reference. Since they point to the same object, the 
  change is reflected in both variables.

  Conclusion:
- Why did both change?
  Because user1 and user2 reference the same object in memory. When you modify the object through user2, 
  it affects the same object that user1 references.

  Output:
- console.log("user1.email:", user1.email); will output: "sharma@mail.com"
- console.log("user2.email:", user2.email); will output: "sharma@mail.com"  */







/* Fix this code so that changing user2.name doesn't affect user1.name:
     let user1 = { name: "Kajal" };
     let user2 = user1;
     user2.name = "Sharma";
   Use: Spread operator { ...user1 } or Object.assign() for shallow copy.   */

// Using spread operator(...)
let user01 = { name: "Kajal" };
let user02 = {...user01};  //Creates a new object with same properties using spread operator

user02.name = "Sharma";

console.log(user01.name);  //"Kajal" remains unchaged
console.log(user02.name);  // "Sharma"


// Using object.assign()
let user001 = { name: "Kajal" };
let user002 = Object.assign({},user001);  //Creates a shallow copy

user002.name = "Sharma";  //only modifies user002

console.log(user001.name);  //"Kajal" remains unchaged
console.log(user002.name);  // "Sharma"







/* 
Compare Primitive vs Object Behavior
 Write a function compareMemory() that:
- Declares a string and copies it → modify one → compare both
- Declares an object and copies it → modify one → compare both
- Print results and explain what’s happening (stack vs heap).   */
function compareMemory() {
  // Primitive (string) - STACK MEMORY
  let str1 = "Hello";
  let str2 = str1; // Copy the value
  
  str2 = "World"; // Modify the copy
  
  console.log("Primitive (string) behavior:");
  console.log("str1:", str1); // "Hello" (unchanged)
  console.log("str2:", str2); // "World"
  console.log("Are equal?", str1 === str2); // false
  
  // Object - HEAP MEMORY
  let obj1 = { message: "Hello" };
  let obj2 = obj1; // Copy the reference
  
  obj2.message = "World"; // Modify through the reference
  
  console.log("\nObject behavior:");
  console.log("obj1:", obj1); // { message: "World" } (changed)
  console.log("obj2:", obj2); // { message: "World" }
  console.log("Are equal?", obj1 === obj2); // true
  
  // Explanation
  console.log("\nExplanation:");
  console.log("- Primitives (strings, numbers, etc.) are stored in STACK memory.");
  console.log("  When copied, a new independent value is created.");
  console.log("- Objects are stored in HEAP memory, with references in STACK.");
  console.log("  When copied, only the reference is copied (both point to the same object).");
}

// Run the function
compareMemory();







/* Bug Hunt: Profile Change Issue
  Suppose you store a profile object in loggedInUser and assign it to another variable adminView.
    If adminView.name = "Admin" changes the name in loggedInUser, what caused this issue?
  Fix it using spread syntax and explain how this avoids the reference bug.  */

// Bugged code
let loggedInUser = { name: "Kajal", role: "user" };
let adminView = loggedInUser;  // Assigns reference (not a copy)

adminView.name = "Admin";     // Modifies both objects!

console.log(loggedInUser); // { name: "Admin", role: "user" } 😱
console.log(adminView);    // { name: "Admin", role: "user" }

// Fixed code
let loggedInUser1 = { name: "Kajal", role: "user" };
let adminView1 = { ...loggedInUser1 }; // Creates a new object with copied properties(spread operator)

adminView1.name = "Admin"; // Only modifies adminView

console.log(loggedInUser1); // { name: "Kajal", role: "user" } 
console.log(adminView1);    // { name: "Admin", role: "user" }







/*  1 Mini Summary Table
 Create a console.table() comparing Stack vs Heap:
  - Concept	Stack	Heap: Stored Values	Primitives (string, number, etc.)	Objects, Arrays, Functions
  - Copy Behavior	Copies by value	Copies by reference
  - Memory Type: Fixed size, fast	Dynamic size, slower
  Example	let a = 10;	let obj = { name: "Kajal" } */
const memoryComparison = [
  { 
    Concept: "Stored Values",
    Stack: "Primitives (string, number, boolean, etc.)",
    Heap: "Objects, Arrays, Functions"
  },
  { 
    Concept: "Copy Behavior",
    Stack: "Copies by value (independent)",
    Heap: "Copies by reference (shared)"
  },
  { 
    Concept: "Memory Type", 
    Stack: "Fixed size, fast allocation", 
    Heap: "Dynamic size, slower allocation" 
  },
  { 
    Concept: "Example", 
    Stack: "let a = 10;", 
    Heap: "let obj = { name: \"Kajal\" };" 
  }
];

console.table(memoryComparison);



