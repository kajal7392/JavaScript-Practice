/* Question 8: Class Syntax
Using ES6 class syntax, create a class Animal with a constructor that takes name and a method speak that 
logs a message. Create an instance of the class and call the speak method. */

// Solution:

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const myPet = new Animal("Tommy");

myPet.speak();
