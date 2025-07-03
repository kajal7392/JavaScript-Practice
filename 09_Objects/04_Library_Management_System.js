/* Library Management System:

Create a Book object with properties like title, author, and ISBN. Include methods to display book 
details and check if the book is available. Implement a Library object that can hold multiple books.
Use the Singleton pattern to ensure only one instance of the library exists. */

// Solution:
const Book = {
    title: "",
    author: "",
    ISBN: "", 
    available: true,

    // Method to display book details
    displayBookDetails() {
        console.log("Book Title: ", this.title);
        console.log("Author: ", author);
        console.log("ISBN: ", this.ISBN);
        console.log("Available: ", this.available ? "Yes" : "No");
    },

    // Method to check book 
    checkBook() {
        if(this.available) {
            console.log(`${this.title} is available.`);
        } else {
            console.log(`${this.title} is not available.`)
        }
    } 
};

// Create a book instance
const book1 = Object.create(Book);
book1.title = "The Great Gatsby";
book1.author = "F. Scott Fitzergerald";
book1.ISBN = "9780743273565";

book1.displayBookDetails();
book1.checkBook();


const Library = (function () {
  let instance;

  function createInstance() {
    return {
      books: [],

      // Method to add a book
      addBook(book) {
        this.books.push(book);
        console.log(`Book "${book.title}" added to library.`);
      },

      // Method to find a book by title
      findBook(title) {
        const found = this.books.find(book => book.title === title);
        if (found) {
          found.displayBook();
        } else {
          console.log(`Book titled "${title}" not found.`);
        }
      },

      // Display all books
      listBooks() {
        console.log("Library Collection:");
        this.books.forEach(book => book.displayBook());
      }
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();


// Get the singleton library
const myLibrary = Library.getInstance();

// Add books
myLibrary.addBook(book1);

// Find a book
myLibrary.findBook("The Great Gatsby");

// List all books
myLibrary.listBooks();
