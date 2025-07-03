/* User Profile Management System

Create a JSON structure to represent user profiles in a web application. Each profile should include 
fields like username, email, age, bio, and friends (an array of usernames). Write a function to add 
a new user profile to the JSON data and another function to retrieve a user profile by username. */


// Solution:

// JSON structure that represents user profiles
const Users = [
  {
    username: "Michael T Hammer",
    email: "wilfrid_gra@yahoo.com",
    age: 56,
    bio: "Food guru. Typical alcohol evangelist. Music expert. Wannabe internet advocate.",
    friends: ["Lisa J Martinez", "Dennis R Britt", "Brenda R Young", "Tara A Leary", "Mellisa S Stewart"]
  }
];

// Function to add a new user
function addNewUser(username, email, age, bio, friends) {
  const newUser = {
    username: username,
    email: email,
    age: age,
    bio: bio,
    friends: friends
  };
  Users.push(newUser);
  var msg = `User ${username} has been added successfully.`;
  alert(msg);
}

// Function to get user by username
function getUserByUsername(username) {
  const user = Users.find(u => u.username === username);
  if (user) {
    alert(`User "${username}" found.`);
    return user;
  } else {
    var usernotfound = `User "${username}" not found.`;
    alert(usernotfound);
    return null;
  }
}

// Add a new user
addNewUser(
  "Sarah P Miller",
  "sarah.miller@example.com",
  32,
  "Coffee lover. Traveler. Bookworm.",
  ["Michael T Hammer"]
);

// Retrieve a user
getUserByUsername("Sarah P Miller");
