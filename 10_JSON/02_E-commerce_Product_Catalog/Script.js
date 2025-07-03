/* Design a JSON schema for an e-commerce product catalog. Each product should have fields like 
id, name, description, price, category, and stock. Implement a function that takes a category name as 
input and returns all products in that category. */


// Solution:
const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with OLED display",
    price: 799.99,
    category: "Electronics",
    stock: 25
  },
  {
    id: 2,
    name: "Laptop",
    description: "Lightweight laptop for work and play",
    price: 1200.00,
    category: "Electronics",
    stock: 15
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and stylish running shoes",
    price: 99.99,
    category: "Footwear",
    stock: 50
  }
];


// function that generates products data of same category
function getProducts(category) {
  return products.filter(product => product.category === category);
}
  const categoryName = prompt("Enter the category of product to search");
  const result = getProducts(categoryName);

if (result.length > 0) {
  let msg = `Products in category "${categoryName}":\n\n`;
  result.forEach(product => {
    msg += `- ${product.name} ($${product.price})\n`;
  });
  alert(msg);
} else {
  alert(`No products found in category "${categoryName}".`);
}
