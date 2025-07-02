// Basic creation & simple methods with real explanation:


// Create an Array of fruits
const fruits = ["Apple", "Mango", "Banana"];
console.log("All Fruits: ", fruits);
console.log("First fruit: ", fruits[0]);

// Add new fruit at the end
fruits.push("Orange");
console.log("After Push: ", fruits);

// Remove last fruit
fruits.pop();
console.log("After Pop: ", fruits);

// Add new fruit at the start
fruits.unshift("Strawberry");
console.log("After unshift: ", fruits);

// Remove first fruit
fruits.shift();
console.log("After shift: ", fruits);

// Check if the array includes
console.log("Includes Mango?", fruits.includes("Mango"));

// Find the index of banana
console.log("Index of Banana is: ", fruits.indexOf("Banana"));