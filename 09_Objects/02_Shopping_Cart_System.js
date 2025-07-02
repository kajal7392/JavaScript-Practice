/* Shopping Cart System (Object Literals + Methods)
Build a cart object with items (as an array of objects) and methods:
addItem(name, price), calculateTotal(), applyDiscount(code). */

// Solution:
const cart = {
    Items: [],

    // Method to add items
    addItem(name, price) {
        this.Items.push({name, price});
        console.log(`Added ${name} for $${price.toFixed(2)}`);
    },

    // Method to calculate total
  calculateTotal() {
  let total = 0;

  // Loop through each item in the cart
  for (let i = 0; i < this.Items.length; i++) {
    total += this.Items[i].price;
  }

  console.log(`Cart total: $${total.toFixed(2)}`);
  return total;
},

  // Method to apply discount based on code
  applyDiscount(code) {
    let discount = 0;
    if (code === "SAVE10") {
      discount = 0.10; // 10% off
    } else if (code === "SAVE20") {
      discount = 0.20; // 20% off
    } else {
      console.log("Invalid discount code.");
      return;
    }

    const total = this.calculateTotal();
    const discountedTotal = total - (total * discount);
    console.log(`Discount applied: ${discount * 100}% off`);
    console.log(`Discounted total: $${discountedTotal.toFixed(2)}`);
  }
};

// Simulate usage:
cart.addItem("T-shirt", 19.99);
cart.addItem("Jeans", 49.99);
cart.addItem("Hat", 14.99);

cart.calculateTotal();

cart.applyDiscount("SAVE10");
