# 📊 06 - Numbers & Math in JavaScript

This folder focuses on practical number handling and math operations in JavaScript. It includes essential conversions, mathematical utilities, and a real-world use case like OTP generation.

---

## ✅ Topics Covered

### 🔢 Type Conversion

| Method         | Description                                                         | Example           |
|----------------|---------------------------------------------------------------------|-------------------|
| `parseInt()`   | Converts string to integer (stops at non-numeric chars)             | `"42.5"` ➞ `42`   |
| `parseFloat()` | Converts string to float (retains decimals)                         | `"42.67"` ➞ `42.67` |
| `Number()`     | Converts entire string, returns `NaN` if invalid                    | `"abc"` ➞ `NaN`   |

### 📐 Math Methods

| Method         | Description                                | Example             |
|----------------|--------------------------------------------|---------------------|
| `Math.floor()` | Rounds down                                | `7.6` ➞ `7`         |
| `Math.ceil()`  | Rounds up                                  | `7.6` ➞ `8`         |
| `Math.round()` | Rounds to nearest integer                  | `7.6` ➞ `8`         |
| `Math.max()`   | Returns largest number                     | `max(5,9,1)` ➞ `9`  |
| `Math.random()`| Generates random float between 0 and 1     | `0.4938...`         |

---

## 🔧 Real-World Program: Generate OTP

A reusable function that generates a secure numeric OTP (One-Time Password) of given digit length.

### 🔹 Function: `generateOTP(length)`
- Accepts a number (digit count)
- Returns a string of numeric digits (0–9)
- Handles leading zeros correctly

### 🧪 Example Output
```js
generateOTP(4); // ➞ "0382"
generateOTP(6); // ➞ "492781"


# ✅ Used Math.floor(Math.random() * 10) to generate single-digit values
# ✅ Used string concatenation to ensure digit count is preserved




📂 Files Included

| File                  | Purpose                                       |
| --------------------- | --------------------------------------------- |
| `GenerateOTP.js`      | Secure OTP generator using Math + loop        |
| `Numbers_Practice.js` | Core number operations, parsing, Math methods |
| `README.md`           | This summary file                             |



## 🧠 Key Learnings

- Convert string to number using parseInt, parseFloat, and Number()
- Generate random values with Math.random()
- Apply math rounding (floor, ceil, round)
- Understand behavior on invalid conversions (NaN)
- Create utility functions that feel "production-grade"