//Declare three variables using var, let, and const for a user's name, age, and whether they are a 
// student. Print them.

var username = "Alice";   //var allows value to be re-declared and updated
let age = 25;   //let allows values to be updated but not re-declared
const isStudent = true;   //const doesn't allow value to be updated or re-declared

console.log(username);
console.log(age);
console.log(isStudent);


//Try reassigning values to all three. Note which ones succeed and which ones throw an error.
username = "Tom";   //username will be updated
age = 28;   //age will be updated
// isStudent = false;   //throw an error,const cannot be reassigned or updated

console.log(username);
console.log(age);
console.log(isStudent);


//Create a block (e.g., inside {}) and declare a variable with the same name using let inside and outside
//  the block. Print both and explain the result.

let Age = 25;   //declared outside the block
{
    let Age = 30;   //delcared inside the block
    console.log("Inside block Age:",Age);
}
    console.log("Outside block Age:",Age)

/* Explanation:
    -The userAge declared inside the block {} is a separate, block-scoped variable that only exists within 
     that block.
    -The userAge declared outside the block is not affected by the inner declaration.
    -Printing userAge inside the block shows the inner value 30.
    -Printing userAge outside the block shows the outer value 25.
    -This demonstrates how let respects block scope, allowing variables with the same name to coexist in 
     different scopes without conflict.
*/


//Declare a global var variable and a block-scoped let variable. Print them inside and outside the block.

var globalvar = "I'm a global var";
{
    let blocklet = "I'm a block-scoped let";
    console.log("Inside the block, globalvar",globalvar);  //Accessible
    console.log("Inside the block, blocklet",blocklet);  //Accessible
}
    console.log("Outside the block, globalvar",globalvar);  //Accessible
    console.log("Outside the block, blocklet",blocklet);  //Not accessible

/* Explanation:
    -'globalVar' declared with var at global scope is accessible both inside and outside the block.
    -'blockLet' declared with let inside the block is only accessible inside the block.
    - Attempting to access 'blockLet' outside the block throws a ReferenceError because let is block-scoped.
*/



//Try to use a const without initializing it. What happens? Why?

const myConst;
// myConst = "ks12345@gmail.com";
// console.log(myConst);   //cause an error as missing initialization

/*Explanation:
    - When you declare a variable with const, it must be initialized at the time of declaration. 
      This means you need to assign a value to it immediately.
    - If you attempt to declare a const variable without an initializer (i.e., without assigning a value),
      JavaScript will throw a SyntaxError indicating that a const declaration must be initialized.
    - This behavior is by design to ensure that const variables are always assigned a value and cannot be 
      left uninitialized, which helps prevent potential errors in your code.
*/

