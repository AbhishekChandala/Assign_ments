//1. Arrays: Creation, Accessing Elements, and Methods
//Create an array of fruits and print the elements using a for loop
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//Access the third element of an array and print it
console.log(fruits[2]);  // Output: Orange

//Find the length of an array and print it
console.log(fruits.length);  // Output:4

// 2. Array Operations (push, pop, unshift, shift)
//Add an element to the end of an array using push() method:
fruits.push('Pineapple');
console.log(fruits);

//Remove the last element from an array using pop() method:
fruits.pop();
console.log(fruits);
//Add an element to the beginning of an array using unshift() method:
fruits.unshift('Strawberry');
console.log(fruits);
///Remove the first element from an array using shift() method:
fruits.shift();
console.log(fruits);
//3. Objects: Creating, Accessing, and Modifying
// Create an object representing a person with properties like name, age, and city:
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
//Access the person's name using both dot notation and square bracket notation:
console.log(person.name);  // Using dot notation
console.log(person['name']);  // Using square bracket notation
//Add a new property "occupation" to the person object using dot notation:
person.occupation = 'Engineer';
console.log(person);

//Add a new property "hobbies" to the person object using square bracket notation:
person['hobbies'] = ['Reading', 'Traveling'];
console.log(person);


//4. Objects: Methods and 'this' Keyword
//Create a Car object with properties like make, model, and year. Add a method drive() that logs a message:
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    drive: function() {
        console.log('The car is driving');
    }
};

car.drive();

//Create a Calculator object with methods like add, subtract, multiply, and divide:
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};

console.log(calculator.add(5, 3));       // Output: 8
console.log(calculator.subtract(10, 6)); // Output: 4
console.log(calculator.multiply(4, 7));  // Output: 28
console.log(calculator.divide(20, 4));   // Output: 5

//5. Loops: Iterating over Arrays and Using Break & Continue
//Iterate over an array of numbers using a for loop and print each number:
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//Iterate over an array of strings using a while loop and print each string:
let strings = ['Hello', 'World', 'JavaScript'];
let i = 0;
while (i < strings.length) {
    console.log(strings[i]);
    i++;
}
//Use a for loop to find the sum of all elements in an array:
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);  // Output: 15
//Use a while loop to find the first even number in an array:
let evenFound = false;
i = 0;
while (i < numbers.length && !evenFound) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
        evenFound = true;
    }
    i++;
}
//Use a for loop with a break statement to exit the loop when a certain condition is met:
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        break;
    }
    console.log(numbers[i]);
}
//Use a for loop with a continue statement to skip certain elements in the array:
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        continue;
    }
    console.log(numbers[i]);
}
//6. Variable Scope, Hoisting, and this Keyword
//Demonstrate the difference between global and local variables using examples:
let globalVar = 'I am global';

function testScope() {
    let localVar = 'I am local';
    console.log(globalVar);  // Accessible
    console.log(localVar);   // Accessible within function
}

testScope();
console.log(globalVar);  // Accessible
console.log(localVar);   // Error: localVar is not defined
//Explain and demonstrate hoisting:
console.log(hoistedVar);  // Output: undefined (due to hoisting)
var hoistedVar = 'I am hoisted';

// Function hoisting example
hoistedFunction();  // Works due to hoisting
function hoistedFunction() {
    console.log('This function is hoisted!');
}
//Write code to illustrate hoisting and its consequences:
console.log(myVar);  // Output: undefined (hoisted declaration but not the value)
var myVar = 'Hoisted variable';
//7. Understanding this Keyword and Arrow Functions
//this keyword behavior in regular functions, object methods, and arrow functions:
let person = {
    name: 'Alice',
    regularFunction: function() {
        console.log(this.name);  // Refers to person object
    },
    arrowFunction: () => {
        console.log(this.name);  // Refers to global scope, not person
    }
};

person.regularFunction();  // Output: Alice
person.arrowFunction();    // Output: undefined (as this refers to global)
//Use arguments keyword to access all arguments passed to a function:
function showArguments() {
    console.log(arguments);
}

showArguments(1, 2, 3, 4);
//    Compare and contrast objects vs primitives: 
//Objects are mutable, and when assigned to a new variable, they reference the same memory location:

let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 2;
console.log(obj1.a);  // Output: 2 (shared reference)

//Primitives, however, are immutable and are copied by value:
let x = 10;
let y = x;
y = 20;
console.log(x);  // Output: 10 (independent values)
