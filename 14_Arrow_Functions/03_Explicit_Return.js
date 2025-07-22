/* Question 3: Explicit Return with Object
You are building a feature that generates a list of products. Each product has a name and a price. Write 
a function that takes an array of products and returns an array of objects containing the product name 
and its price formatted as a string (e.g., "Product: Name, Price: $X.XX"). Use an arrow function with an 
explicit return. */

// Solution:

const products = [
    {name: "Laptop", price: "$999.99"},
    {name: "Toothpaste", price: "$16.19"},
    {name: "Shoes", price: "$15.99"},
    {name: "Pen", price: "$9"},
    {name: "Perfume", price: "$9.37"}
];

const formattedProducts = products.map(product => {
    return {
        name: product.name,
        formattedProducts: `Product: ${product.name}, Price: $${product.price}`
        };
});

console.log(formattedProducts);