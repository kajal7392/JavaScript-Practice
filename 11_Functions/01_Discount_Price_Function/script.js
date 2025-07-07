/* Calculate Discounted Price (Functions + Parameters)
Problem:
Write a function calculateDiscountedPrice(price, discount) that:
-> Takes the original price and a discount percentage as arguments.
-> Calculates the final price after applying the discount.
-> Returns the final price.
-> Test with different values and log the results.
*/

// Solution:

// function to calculate price
function calculateDiscountedPrice(price, discount) {
    const discountAmount = (price * (discount/100));
    const final = price - discountAmount;
    return final;
}

console.log("Price after 10% discount: ", calculateDiscountedPrice(100, 10));
console.log("Price after 20% discount: ", calculateDiscountedPrice(200, 20));
console.log("Price after 50% discount: ", calculateDiscountedPrice(50, 50));
console.log("Price after 0% discount: ", calculateDiscountedPrice(75, 0));