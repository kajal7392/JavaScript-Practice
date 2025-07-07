/* Basic Inventory Management (Functions + Parameters + Scope)
Problem:
-> Create an inventory array to store items: ["Shoes", "T-shirts"].
-> Write a function addItem(item) that adds a new item to the inventory.
-> Write a function removeItem(item) that removes an item if it exists.
-> The inventory must remain updated — so make sure the scope allows both functions to see and modify it.
-> Test by adding and removing items and logging the inventory.
*/


// Solution:
let inventory = ["Shoes", "T-shirts"];

//function to add an item to the inventory
function addItem(item) {
    inventory.push(item);
}

//function to remove an item from the inventory
function removeItem(item) {
    const index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
    } else {
        console.log(`${item} not found in inventory.`);
    }
}

// Test the functions
console.log("Initial Inventory:", inventory);
addItem("Hats");
console.log("After Adding Hats:", inventory);
removeItem("T-shirts");
console.log("After Removing T-shirts:", inventory);
removeItem("Gloves"); // Testing removal of an item that doesn't exist
console.log("Final Inventory:", inventory);

// Output the final inventory
console.log("Final Inventory:", inventory);     
