/* Large Employee Directory 
Problem:
Your company’s HR system exports employee data as JSON.
Example:
[
  { "id": 1, "name": "Alice", "department": "HR", "email": "alice@company.com" },
  { "id": 2, "name": "Bob", "department": "Engineering", "email": "bob@company.com" }
]
 Build a script that:
-> Parses the JSON.
-> Filters employees by department.
-> Updates an employee’s email.
-> Converts the updated object back to JSON for sending back to the server.

Key concepts:
✅ JSON arrays of objects
✅ Filter, update, re-serialize
*/

// Solution:

// Employee Directory
const EmployeeData = [
  { "id": 1, "name": "Alice", "department": "HR", "email": "alice@company.com" },
  { "id": 2, "name": "Bob", "department": "Engineering", "email": "bob@company.com" },
  { "id": 3, "name": "Charlie", "department": "Marketing", "email": "charlie@company.com" },
  { "id": 4, "name": "Diana", "department": "Sales", "email": "diana@company.com" },
  { "id": 5, "name": "Ethan", "department": "Finance", "email": "ethan@company.com" },
  { "id": 6, "name": "Fiona", "department": "Engineering", "email": "fiona@company.com" },
  { "id": 7, "name": "George", "department": "HR", "email": "george@company.com" },
  { "id": 8, "name": "Hannah", "department": "Marketing", "email": "hannah@company.com" },
  { "id": 9, "name": "Ian", "department": "Sales", "email": "ian@company.com" }
];

// No need to parse since EmployeeData is already an array of objects
console.log("Data in form of objects: ", EmployeeData);

// Filter employees by department
const EngineeringEmployees = EmployeeData.filter(emp => emp.department === "Engineering");
console.log("Engineering Employees: ", EngineeringEmployees);

// Update an email for a specific employee (e.g., Bob)
const employeeToUpdate = EmployeeData.find(emp => emp.id === 2); // Find Bob by ID
if (employeeToUpdate) {
    employeeToUpdate.email = "bob.newcompany@gmail.com"; // Update email
}

// Convert updated object back to JSON
const updatedJson = JSON.stringify(EmployeeData);
console.log("Updated Employee Data:", updatedJson);
