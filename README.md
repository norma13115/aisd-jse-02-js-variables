# JavaScript Variables

![Screenshot of the finished webpage](assets//complete.png)

## Description 📄

In this project, you'll dive into key JavaScript concepts, focusing on the differences between `let` and `const` and how to use them effectively. You'll see how `let` allows you to reassign values while `const` keeps them fixed, and practice making console outputs clearer and more readable. Through hands-on examples, you'll manipulate variables, use them in expressions, and combine them to create dynamic content. By the end, you'll know when to choose `let` or `const` and how to use them confidently in your code.

## Expected Project Structure 🏗️

```
JavaScriptVariables/
└── index.js
```

# Instructions ✅

## 1. **Create the Project Folder and Files**

- [ ] Create a folder named `JavaScriptVariables` to store all your project files.
- [ ] Inside the `JavaScriptVariables` folder, create a file named `index.js`. This will be your main JavaScript file.

## 2. **Set Up JavaScript Variables**

Variables are used to store data values. In JavaScript, you can declare variables using `let` or `const`.

- [ ] Open your `index.js` file and add the following code:

```js
// Using let to declare a variable
let age = 25; 
console.log(age); // Expected Output: 25

// Using const to declare a variable
const birthYear = 1998;
console.log(birthYear); // Expected Output: 1998
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**
- `let` is used for variables that can be reassigned and allows us to change the value later if needed.
- `const` declares a constant value, meaning it cannot be reassigned.

## 3. **Make Your Console Logs More Readable**

Currently the `console.log()` we created outputs the variable value alone. To make the output more readable, you can use strings to provide context.
- [ ] Update your `console.log()` to the following

```js
console.log("Initial Age:", age); // Expected Output: Initial Age: 25

console.log("Birth Year:", birthYear); // Expected Output: Birth Year: 1998
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**
- Now our `console.log()` uses a string and a variable to provide a clearer message in the console.

## 4. **Explore `let` in Action**
Let's modify the `age` variable declared with `let` and observe the behavior of `const`:

- [ ] Open your `index.js` file and change the value of the `age` variable to 30.

```js
// Modify let variable
age = 30; 
console.log("Updated Age: ", age); // Expected Output: Updated Age: 30
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**
- `age` is declared with `let`, so we can change its value later.


## 5. **Explore `const` in Action**
Now, let's observe what happens when you try to modify a `const` variable.

- [ ] Open your `index.js` file and add the following code:

```js
// Attempt to modify the const variable birthYear
// Uncommenting the next line will cause an error
// birthYear = 2000; // Error: Assignment to constant variable.
console.log("Birth Year: ", birthYear); // Expected Output: Birth Year: 1998
```
- [ ] Attempt to change the value of the `birthYear` variable to 2000 by uncommenting the line modifying our `birthYear` variable. If done successfully, your code should look like the following:

```js
// Attempt to modify the const variable birthYear
// Uncommenting the next line will cause an error
birthYear = 2000; // Error: Assignment to constant variable.
console.log("Birth Year: ", birthYear); // Expected Output: Birth Year: 1998
```
- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.


**Explanation:**
- `birthYear` is declared with `const`, so any attempt to change its value will result in an error.

## 6. **Apply Variables in Expressions**

You can also use variables in mathematical expressions:

```js
let currentYear = 2024;
let yearsSinceBirth = currentYear - birthYear;
console.log("Years Since Birth: ", yearsSinceBirth); // Expected Output: 26

// Update the current year
currentYear = 2025;
yearsSinceBirth = currentYear - birthYear;
console.log("Years Since Birth After Update: ", yearsSinceBirth); // Expected Output: 27
```

**Explanation:**
- This example shows how `let` allows for reassigning new values and using them in expressions.
- When `currentYear` is updated, the calculation automatically reflects the change.

## 7. **Combining String Variables and Constants**

You can combine string variables and constants to create sentences:

### Example 5:

```js
const greeting = "Hello";
let userName = "Alice";
let personalizedGreeting = greeting + ", " + userName + "!";
console.log(personalizedGreeting); // Expected Output: Hello, Alice!

// Changing userName
userName = "Bob";
personalizedGreeting = greeting + ", " + userName + "!";
console.log("Updated Greeting: ", personalizedGreeting); // Expected Output: Hello, Bob!
```

**Explanation:**
- `const greeting` is not changed, while `let userName` can be reassigned.
- The output shows how we can construct a dynamic greeting message.

## 8. **Decide Which Variable Type to Use**
Before writing more code, it's important to understand when to use `let` versus `const` to make your code safer and more predictable.

- [ ] In general, you should use `const` by default to declare your variables. This practice ensures that you don't accidentally change the value of a variable without intending to, providing a safeguard for your code.
- [ ] Use `let` only when you know the variable's value will need to be modified or reassigned later. For example, if you are working with values that change over time, like counters or state variables, `let` is the appropriate choice.

## Conclusion 📄

Congratulations! You've learned how to use `let` and `const` in JavaScript, observed how they behave differently, and practiced using variables in expressions and concatenations to make your code more dynamic and readable.

---

© All rights reserved to ThriveDX
