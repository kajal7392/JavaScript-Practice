/* Question 4: Chaining Arrow Functions
You are developing a feature that processes a list of tasks. Each task has a title and a completed status.
Write a function that takes an array of tasks and returns the titles of the tasks that are not completed. 
Use arrow functions and chain them together. */

// Solution:

const tasks = [
    { title: "Company Director", completed: true },
    { title: "Registered Company", completed: false },
    { title: "Financial history", completed: false },
    { title: "Business Plan", completed: false },
    { title: "References", completed: false },
];

const uncompletedTasks = (tasks) =>
  tasks.filter(task => !task.completed).map(task => task.title);

console.log(uncompletedTasks(tasks));

