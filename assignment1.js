//1. Variable Declarations and Scope
//(a) Create variables using var, let, and const
var firstName = "Abhishek";
let lastName = "Chandala";
const age = 20;
console.log(firstName); // Output: Abhishek
console.log(lastName);  // Output: Chandala
console.log(age);       // Output: 20


//(b) Demonstrate global vs. local variable scope
var globalVar = "I am global";
function outerFunction() {
let localVar = "I am local";
function innerFunction() {
var innerVar = "I am also local";
console.log(globalVar); // Accessing global variable
console.log(localVar);  // Accessing outer function's local variable
console.log(innerVar);  // Accessing inner function's local variable
}
 innerFunction();
}
outerFunction();

//2. Operators
//(a) Arithmetic operators
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // Addition: 15
console.log(num1 - num2); // Subtraction: 5
console.log(num1 * num2); // Multiplication: 50
console.log(num1 / num2); // Division: 2
console.log(num1 % num2); // Modulus: 0
console.log((num1 + num2) * num1); // Using parentheses to control order: 150

//(b) Comparison operators
