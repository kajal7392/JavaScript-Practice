/* When a user places an order on your website, their shopping cart is sent to the server in JSON format.
Write a script to:
-> Create a cart object with items, total price, and customer info.
-> Convert the object to JSON and “send” it.
-> Simulate a server response that includes an order ID.
-> Parse the response and display order confirmation to the user.

Key concepts:
✅ JSON.stringify() to send data
✅ JSON.parse() to use server response
 */

// Solution:
const cart = {
    customerName : "John Doe",
    items : [
        {name: "Laptop", price : 75000},
        {name: "Mouse", price: 500}
    ],
    total : 75500
};

// Convert from object to JSON
const jsoncart = JSON.stringify(cart);
console.log("Sending data from cart to server...", jsoncart);

// Simulate server response
const serverResponse = `{
  "orderId": "ORD12345",
  "status": "Confirmed",
  "estimatedDelivery": "2025-07-10"
}`;

// Convert fron JSON to object
const confirmation = JSON.parse(serverResponse);
console.log("Fetched data from server", confirmation);