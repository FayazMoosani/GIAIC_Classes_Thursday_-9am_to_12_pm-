// Class_01
// Practice set

// Simple Print Hello World
console.log('Hello World');  // Outputs: Hello World

// print hello world but use a variable
let messages = "Hello World";  // Declare a variable 'messages' and assign it the value "Hello World"
console.log(messages);  // Outputs the value of 'messages': Hello World

// Class_02

// What is the difference between var, let, const

// Use var if you want function-scoped variables that can be hoisted
var firstName = "Ahmed";  // Declare a variable 'firstName' and assign it the value "Ahmed"
var firstName = "Fayaz";  // Re-declare and reassign the variable 'firstName' to "Fayaz"

console.log(firstName);  // Outputs: Fayaz (the last assigned value)

// Use let if you want block-scoped variables that can be reassigned
let myNames = "Fayaz";  // Declare a variable 'myNames' and assign it the value "Fayaz"
myNames = "Ahmed";  // Reassign the variable 'myNames' to "Ahmed"

console.log(myNames);  // Outputs: Ahmed (the reassigned value)

// Use const if you want block-scoped variables that are constant and cannot be reassigned
const myCast = "Moosani";  // Declare a constant 'myCast' and assign it the value "Moosani"
// myCast = "Malik";  // Attempt to reassign the constant 'myCast' (This will cause an error)

console.log(myCast);  // This line will not be executed due to the error above

// Code With FM => FAYAZ MOOSANI
