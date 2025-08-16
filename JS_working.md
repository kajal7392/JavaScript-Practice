# Understanding JavaScript Execution Context

JavaScript is a single-threaded, non-blocking language that uses an execution context to manage the execution of code. Understanding how execution contexts work is essential for mastering JavaScript, as it affects variable scope, function execution, and the behavior of the `this` keyword.

## What is Execution Context?

An Execution Context (EC) is an abstract concept that provides the environment in which JavaScript code is executed. It contains information about the variables, functions, and the scope chain. There are three main types of execution contexts:

1. **Global Execution Context**: This is the default context where JavaScript code starts executing. It creates a global object (e.g., `window` in browsers) and sets the `this` keyword to refer to that global object.

2. **Function Execution Context**: Each time a function is invoked, a new execution context is created for that function. This context contains its own variable object, scope chain, and `this` value.

3. **Eval Execution Context**: This context is created when the `eval` function is called, allowing code to be executed in the context of the current execution environment.

## Phases of Execution Context

The execution context goes through two main phases:

1. **Memory Creation Phase**: During this phase, the JavaScript engine allocates memory for variables and functions. It initializes variables to `undefined` and stores function declarations.

2. **Execution Phase**: In this phase, the JavaScript engine executes the code line by line, assigning values to variables and executing functions.

## Example Breakdown

Let's analyze the following code to understand the execution context in action:

```javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) { 
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);


# Step-by-Step Execution of JavaScript Execution Context

## Global Execution Context

The global execution context is created, and `this` refers to the global object.

## Memory Creation Phase

The JavaScript engine allocates memory for the variables and function:
- `val1` is initialized to `undefined`.
- `val2` is initialized to `undefined`.
- `addNum` is stored as a function definition.
- `result1` is initialized to `undefined`.
- `result2` is initialized to `undefined`.

## Execution Phase

The engine executes the code:
- `val1` is assigned the value `10`.
- `val2` is assigned the value `5`.
- The function `addNum` is called with `val1` and `val2` as arguments:
  - A new function execution context is created for `addNum`.
  - Inside this context, `num1` is assigned `10` and `num2` is assigned `5`.
  - The variable `total` is calculated as `num1 + num2`, resulting in `15`.
  - The function returns `15`, which is assigned to `result1`.
- The function `addNum` is called again with `10` and `2` as arguments:
  - A new function execution context is created for this call.
  - Inside this context, `num1` is assigned `10` and `num2` is assigned `2`.
  - The variable `total` is calculated as `num1 + num2`, resulting in `12`.
  - The function returns `12`, which is assigned to `result2`.