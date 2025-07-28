# 📘 Day 12 - Linear Search Algorithm | 21 Days DSA Challenge

## 🔍 What I Learned

Today I dived into **Linear Search**, one of the simplest searching algorithms. It works by checking each element one by one until the desired element is found or the list ends.

### Key Concepts:
- Searching through an array using a loop
- Checking object properties using keys
- Basic use of `indexOf()` and `includes()` for simple arrays
- Writing a custom function to implement linear search in an array of objects

---

## 📄 Code Summary

### ✅ Searching in a simple array
```js
const names = ["John", "Smith", "Muriel", "Adam"];

console.log(names.indexOf("Smith"));    // returns index if found, else -1
console.log(names.includes("Muriel"));  // returns true or false

✅ Linear Search in an array of objects

const users = [
  { username: "John Doe", email: "johndoe123@gmail.com" },
  { username: "Gracy", email: "gracyjohnson@gmail.com" },
  { username: "Sarah", email: "sarahjohnson@gmail.com" },
  { username: "Rhea", email: "rheagray@gmail.com" }
];

function isUser(array, key) {
  for (let item of array) {
    if (item['email'] === key) {
      return true;
    }
  }
  return false;
}

let res = isUser(users, "abc@gmail.com");
console.log(res);  // Output: false


---

🧠 What I Practiced

Writing reusable functions

Iterating over arrays of objects

Working with conditional statements inside loops



---

🚀 What's Next?

Next, I’ll explore more advanced searching algorithms like Binary Search, and start solving problems based on that.



🛠️ Tech Stack

JavaScript (ES6+)

VS Code



🔗 Connect with Me

Feel free to check out my progress on LinkedIn or GitHub!

