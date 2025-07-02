/* Task:
-> Build a tiny shopping cart manager:
-> Start with a cart array.
-> Add items.
-> Remove an item by name.
-> Check if an item exists.
-> Show total items.
*/


// Solution:
let cart = [];

// Add items in cart
cart.push("Shoes");
cart.push("T-shirt");
cart.push("Gadgets");
cart.push("Electronics");
cart.push("Jeans");
cart.push("Shirts");

console.log("Items in cart: ", cart);


// Remove t-shirt if exists
const index = cart.indexOf("T-shirt");
if( index !== -1) {
    cart.splice(index, 1);
}
console.log("After removing T-shirt from cart: ", cart);

// Check if "Shoes" exist in cart
console.log("Shoes exist? ", cart.includes("Shoes"));

// Total items in cart
console.log("Total items in cart: ", cart.length);