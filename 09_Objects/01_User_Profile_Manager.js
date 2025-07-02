/* User Profile Manager (Object Literals)
Create a user object with properties (name, email, age) and methods (updateEmail, printProfile). 
Simulate a user updating their email and printing their profile. */

// Solution:
const user = {
    // Properties
    name: "Alice",
    email: "alice123@gmail.com",
    age: 25,
    
    // updateEmail method
    updateEmail(newEmail) {
        this.email = newEmail;
        console.log(`Email updated to: ${this.email}`);
    },

    // printProfile method
    printProfile() {
        console.log("User Profile: ")
        console.log(`"Name: ", ${this.name}`);
        console.log(`"Email: ", ${this.email}`);
        console.log(`"Age: ", ${this.age}`);
    }
}

// Simulate the user to update their email
user.updateEmail("alice.newexample@gmail.com");

// Simulate the user to print their profile
user.printProfile();