/* Question 1: Object Method Context
Create an object called car with properties make, model, and a method getDetails that returns a string 
containing the car's make and model. Call the method and log the output. */

// Solution:

car = {
    make: "Toyota",
    model: "Camry",
    getDetails: function() {
        return `${this.make} ${this.model}`;
    }
};
console.log(car.getDetails());