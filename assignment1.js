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
console.log(10 == "10");  // true (loose equality, type coercion)
console.log(10 === "10"); // false (strict equality, no type coercion)
console.log(10 != "10");  // false
console.log(10 !== "10"); // true
console.log(10 < 20);     // true
console.log(10 > 20);     // false
console.log(10 <= 10);    // true
console.log(10 >= 5);     // true

//(c) Logical operators
let a = true;
let b = false;

console.log(a && b); // Logical AND: false
console.log(a || b); // Logical OR: true
console.log(!a);     // Logical NOT: false

//3. Data Types
//(a) Primitive data types
let number = 42;
let string = "Hello";
let boolean = true;
let nothing = null;
let notDefined;

console.log(typeof number);      // number
console.log(typeof string);      // string
console.log(typeof boolean);     // boolean
console.log(typeof nothing);     // object (due to a historical quirk in JS)
console.log(typeof notDefined);  // undefined

//(b) Object data type
let person = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    greet: function() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }
};

console.log(person.firstName); // Access property
person.age = 30;               // Modify property
person.greet();                // Call method

//4. Type Conversion and Coercion
//(a) Explicit type conversion
let numStr = "123";
let boolStr = "true";

console.log(Number(numStr));   // Convert to number: 123
console.log(String(123));      // Convert to string: "123"
console.log(Boolean(boolStr)); // Convert to boolean: true

//(b) Implicit type coercion
console.log("5" + 2);       // "52" (string concatenation)
console.log("5" - 2);       // 3 (numeric subtraction, implicit conversion)
console.log(true + 1);      // 2 (true converts to 1)
console.log(false == 0);    // true (false converts to 0)

//5. Strings and Template Literals
//(a) String manipulation
let str1 = "Hello";
let str2 = "World";
let combined = str1 + " " + str2;

console.log(combined);       // Concatenation: "Hello World"
console.log(str1[1]);        // Access character: "e"
console.log(str1.length);    // String length: 5
console.log(str1.substring(1, 4)); // Substring: "ell"

//(b) Template literals
let name = "Alice";
let age2 = 28;

let message = `My name is ${name} and I am ${age2} years old.`;
console.log(message); // Output: My name is Alice and I am 28 years old.

//6. Decision-Making Statements
//(a) If-else statements
let x = 10;

if (x > 10) {
    console.log("x is greater than 10");
} else if (x === 10) {
    console.log("x is exactly 10");
} else {
    console.log("x is less than 10");
}

//(b) Switch statements
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Banana is yellow.");
        break;
    case "apple":
        console.log("Apple is red.");
        break;
    case "orange":
        console.log("Orange is orange.");
        break;
    default:
        console.log("Unknown fruit color.");
}

//7. Use Strict Mode
"use strict";

let y = 3.14; // Strict mode ensures that variables must be declared before use
console.log(y);

//8. Functions
//(a) Function declaration and calling
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Bro"); // Output: Hello, Bro!

//(b) Function expression
let sayHello = function(name) {
    return "Hi, " + name + "!";
};

console.log(sayHello("ABhi")); // Output: Hi, ABhi!

//(c) Passing parameters and default parameters
function add(a, b = 5) {
    return a + b;
}

console.log(add(3));    // Output: 8 (uses default value of 5)
console.log(add(3, 7)); // Output: 10 (uses provided value of 7)

//9. Return Statement and Chaining
//(a) Returning values from functions
function square(num) {
    return num * num;
}

let result = square(4); // Output: 16
console.log(result);

//(b) Chaining function calls
function multiplyByTwo(x) {
    return x * 2;
}

function addFive(y) {
    return y + 5;
}

let finalResult = addFive(multiplyByTwo(3)); // (3 * 2) + 5 = 11
console.log(finalResult);


