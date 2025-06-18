/* Mini Real-World Project
Create a basic user profile script using everything you've learned:
    - Use let and const appropriately.
    The profile should include:
    - Full Name
    - Age
    - Email
    - IsStudent (true/false)
- Create a function displayProfile() that prints the user's info using template literals.
- Add a block where you try modifying a const field and log what happens.
- Use typeof to print the type of each field. */

const userProfile = {
  fullName: "John Doe",
  age: 22,
  email: "john.doe@example.com",
  isStudent: true,
};

function displayProfile() {
  console.log(`User Profile:
- Full Name: ${userProfile.fullName}
- Age: ${userProfile.age}
- Email: ${userProfile.email}
- Is Student: ${userProfile.isStudent}`);

  console.log("Data Types:");
  console.log(`- fullName: ${typeof userProfile.fullName}`);
  console.log(`- age: ${typeof userProfile.age}`);
  console.log(`- email: ${typeof userProfile.email}`);
  console.log(`- isStudent: ${typeof userProfile.isStudent}`);

  {
    // Trying to modify a const field (object property) inside a block
    console.log("\nInside block, attempting to modify const object property:");

    try {
      // Modifying a property of a const object is allowed
      userProfile.fullName = "Jane Smith";
      console.log("Modified fullName inside block:", userProfile.fullName);

      // Trying to reassign the whole const object (uncomment to see error)
      // userProfile = {}; // This would throw an error: Assignment to constant variable.
    } catch (error) {
      console.error("Error when modifying const object:", error.message);
    }
  }
}

// Run the display function
displayProfile();



