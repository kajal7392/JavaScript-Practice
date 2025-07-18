/* Question 2: Constructor Function
Write a constructor function Book that takes title and author as parameters. Create two instances of Book 
and log their details using a method called getInfo that returns a string with the book's title and author. */

// Solution:

function Book(title, author) {
    this.title = title;
    this.author = author;

    // Method to get book info
    this.getInfo = function() {
        return `Title: ${this.title} \nAuthor: ${this.author}`;
    }
}

// Instances
const instance1 = new Book("Wings of Fire", "Dr. APJ Abdul Kalam");
const instance2 = new Book("The Alchemist", "Paulo Coelho");

// Log the details
console.log(instance1.getInfo());
console.log(instance2.getInfo());
