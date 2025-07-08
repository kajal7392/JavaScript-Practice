/* Problem:
You have a function that calculates discounts:
Task:
-> Predict the output line-by-line.
-> Explain how the local discount does not overwrite the global discount.
*/

// Solution:

var discount = 10;

function calculateTotal(price) {
  var discount = 5;
  return price - (price * discount / 100);
}

console.log(discount);  // 10
console.log(calculateTotal(100));  //95
console.log(discount);  // 10

// Explanation:
// 1. The first console.log prints the global variable `discount`, which is 10
// 2. The function `calculateTotal` is called with a price of 100.
// 3. Inside the function, a local variable `discount` is defined with a value of 5.
// 4. The function calculates the total price after applying the local discount of 5%.
// 5. The second console.log prints the result of the function call, which is 95 (100 - 5% of 100).
// 6. The third console.log again prints the global variable `discount`, which remains unchanged at 10.
// The local variable `discount` inside the function does not overwrite the global variable `discount` 
// because it is scoped to the function. The local variable only exists within the `calculateTotal` 
// function, while the global variable remains



