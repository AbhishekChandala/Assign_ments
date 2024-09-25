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
