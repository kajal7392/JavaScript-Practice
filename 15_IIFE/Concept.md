# What is an IIFE?

An **IIFE** (Immediately Invoked Function Expression) is a JavaScript function that runs **as soon as it is defined**.  
It is a common design pattern used to **create a new scope**, which helps in **avoiding polluting the global scope** and managing **variable visibility**.

---

## Basic Structure of an IIFE

### Using a Regular Function:
```javascript
(function() {
    // Code here runs immediately
})();
```

### Using Arrow Function Syntax:
```javascript
(() => {
    // Code here runs immediately
})();
```

---

## How Does It Work?

1. **Function Declaration**  
   The function is wrapped in parentheses to tell JavaScript to treat it as an **expression** rather than a declaration.

2. **Immediate Invocation**  
   The `()` at the end of the function calls the function **immediately** after defining it.

---

## Why Use IIFE?

- **Avoid Global Scope Pollution**: Variables inside an IIFE are not accessible outside, preventing conflicts with other scripts.
- **Encapsulation**: Allows creating private variables and functions.
- **Module Pattern**: IIFEs can encapsulate functionality, making code modular.

---

## Example of IIFE
```javascript
var result = (function() {
    var a = 5;
    var b = 10;
    return a + b; // Returns 15
})();

console.log(result); // Outputs: 15
```
Here, `a` and `b` are **private** to the IIFE and cannot be accessed outside.

---

## Advanced Concepts

### 1. Passing Arguments to an IIFE
```javascript
var result = (function(a, b) {
    return a + b;
})(5, 10);

console.log(result); // Outputs: 15
```

---

### 2. Using IIFE for Module Pattern
```javascript
var Counter = (function() {
    var count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(Counter.increment()); // Outputs: 1
console.log(Counter.increment()); // Outputs: 2
console.log(Counter.getCount());  // Outputs: 2
```

---

## Summary
An **IIFE**:
- Executes immediately after definition.
- Helps avoid global variable conflicts.
- Encapsulates logic for better code organization.
- Can be used to implement patterns like **modules**.

