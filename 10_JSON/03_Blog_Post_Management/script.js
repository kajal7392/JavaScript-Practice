/* Blog Post Management
Create a JSON structure to represent blog posts. Each post should include id, title, content, author,
date, and tags. Write functions to add a new post, delete a post by ID, and retrieve all posts by a 
specific author. */

// Solution:
const Blog_Posts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content: "A closure is the combination of a function and the lexical environment within which that function was declared...",
    author: "Alice",
    date: "2024-07-03",
    tags: ["JavaScript", "Functions", "Closures"]
  },
  {
    id: 2,
    title: "A Guide to CSS Flexbox",
    content: "Flexbox is a one-dimensional layout method for arranging items in rows or columns...",
    author: "Bob",
    date: "2024-07-02",
    tags: ["CSS", "Flexbox", "Layout"]
  }
];

// function to add a new post
function addNewPost(id, title, content, author, date, tags) {
    const newPost = {id, title, content, author, date, tags};
    Blog_Posts.push(newPost);
    console.log(`Post ${title} has been added successfully`);
}

// function to delete a post by ID
function deletePost(id) {
    const index = Blog_Posts.findIndex(post => post.id === id);
    if(index !== -1) {
        const removed = Blog_Posts.splice(index,1);
        console.log(`Post with ${id} has been deleted successfully.`);
        return removed[0];
    } else {
        console.log(`Post with ${id} not found`);
        return null;
    }
}

function getPostsByAuthor(author) {
  const postsByAuthor = Blog_Posts.filter(post => post.author === author);

  if (postsByAuthor.length > 0) {
    console.log(`Posts by ${author}:`, postsByAuthor);
  } else {
    console.log(`No posts found for author "${author}".`);
  }

  return postsByAuthor;
}

// Add a new post
addNewPost(
  3,
  "Introduction to React",
  "React is a JavaScript library for building user interfaces...",
  "Alice",
  "2024-07-03",
  ["JavaScript", "React", "Frontend"]
);

// Delete a post
deletePost(2);

// Get posts by author
getPostsByAuthor("Alice");
