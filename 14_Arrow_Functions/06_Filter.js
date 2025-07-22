/* Question 6: Filtering with Arrow Functions
You are working on a project that requires filtering a list of employees based on their department. 
Write a function that takes an array of employee objects and a department name, and returns an array of 
employees who belong to that department using an arrow function. */

// Solution:

const employees = [
    {name: "Alice", department: "HR"},
    {name: "Bob", department: "Engineering"},
    {name: "Charlie", department: "HR"},
    {name: "David", department: "Finance"},
    {name: "Tom", department: "HR"}
];

const filterByDepartment = (employees, department) => employees.filter
    (employee => employee.department === department);

const filteredEmployee = filterByDepartment(employees, "HR");

console.log(filteredEmployee);