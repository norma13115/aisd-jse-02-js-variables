// Using let to declare a variable
let age = 25; 
console.log(age); // Expected Output: 25

// Using const to declare a variable
const birthYear = 1998;
console.log(birthYear); // Expected Output: 1998

// Making console logs readable 
console.log("Initial Age:", age); // Expected Output: Initial Age: 25

console.log("Birth Year:", birthYear); // Expected Output: Birth Year: 1998

// Modify let variable
age = 30; 
console.log("Updated Age: ", age); // Expected Output: Updated Age: 30

// Attempt to modify the const variable birthYear
// birthYear = 2000; // Error: Assignment to constant variable.
console.log("Birth Year: ", birthYear); // Expected Output: Birth Year: 1998

// Variables in Expressions
let currentYear = 2024;
let yearsSinceBirth = currentYear - birthYear;
console.log("Years Since Birth: ", yearsSinceBirth); // Expected Output: 26

// Update the current year
currentYear = 2025;
yearsSinceBirth = currentYear - birthYear;
console.log("Years Since Birth After Update: ", yearsSinceBirth); // Expected Output: 27

// Dynamic output with strings and variables
const greeting = "Hello";
let userName = "Alice";
let personalizedGreeting = greeting + ", " + userName + "!";
console.log(personalizedGreeting); // Expected Output: Hello, Alice!

// Update the userName
userName = "Bob";
personalizedGreeting = greeting + ", " + userName + "!";
console.log("Updated Greeting: ", personalizedGreeting); // Expected Output: Hello, Bob!