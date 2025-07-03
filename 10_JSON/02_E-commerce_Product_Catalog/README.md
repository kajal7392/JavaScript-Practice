# 🛍️ E-commerce Product Catalog

This is a simple **E-commerce Product Catalog** project built with **HTML + JavaScript**.  
It demonstrates how to:

- Design a JSON-like structure for products.
- Filter products by category.
- Prompt the user for input.
- Display results using `alert()` in the browser.

---

## 📦 **Project Structure**

📁 project-folder/
├── index.html
├── script.js
└── README.md


- `index.html` — The main web page with a button to get products by category.
- `script.js` — Contains the JSON product data and JavaScript functions.
- `README.md` — Project description.

---

## 📑 **JSON Schema**

Each product in the catalog has:

| Field       | Type    | Description                          |
|-------------|---------|--------------------------------------|
| `id`        | Number  | Unique product ID                    |
| `name`      | String  | Product name                         |
| `description` | String | Short product description           |
| `price`     | Number  | Product price                        |
| `category`  | String  | Product category (e.g., Electronics) |
| `stock`     | Number  | Number of items in stock             |

---

## ⚙️ **How It Works**

1. Click **“Get Products”**.
2. Enter a category name in the prompt (e.g., **Electronics**).
3. The app shows a list of matching products in an alert.

---

## 🚀 **Run It**

1. Open `index.html` in your browser.
2. Click the **Get Products** button to test it.

✅ Make sure your `script.js` is correctly linked in your HTML:
```html
<script src="script.js"></script>
