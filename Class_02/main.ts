// Class_03

// Declare a variable 'message' of type string and assign it the value 'Hello world'
let message: string = 'Hello world'; 
console.log(message);  // Outputs: Hello world

// Declare a variable 'ages' of type number and assign it the value 23
let ages: number = 23;

// Declare variables with specific types and values
let firstName: string = "Fayaz";
let age: number = 23;
let isMarried: boolean = true;

// Concatenate 'firstName', 'age', and 'isMarried' and print the result
console.log(firstName + age + isMarried);  // Outputs: Fayaz23true

// Explanation of type coercion and concatenation in JavaScript
// string + string = string
// number + string = string
// string + number = string
// number + number = number

// ex: 01
// number + string

let num1 = 1;
let num2 = "1";

// When a number is added to a string, the number is converted to a string and concatenated
console.log(num1 + num2);  // Outputs: 11

// ex: 02
// string + string 

let num3 = "2";
let num4 = "2";

// When two strings are concatenated
console.log(num3 + num4);  // Outputs: 22

// ex: 03 
// number + number

let num5 = 7;
let num6 = 3;

// When two numbers are added together
console.log(num5 + num6);  // Outputs: 10

// Demonstrating how changing variable values affects the output

let myName = "Fayaz";
let messages = "Hello" + myName;

// Concatenates "Hello" with the value of 'myName' without space
console.log(messages);  // Outputs: HelloFayaz

// Adding a space between "Hello" and the value of 'myNames'
let myNames = "Fayaz";
let messagez = "Hello " + myNames;

// Concatenates "Hello " with the value of 'myNames' with space
console.log(messagez);  // Outputs: Hello Fayaz

// Code With FM => FAYAZ MOOSANI
