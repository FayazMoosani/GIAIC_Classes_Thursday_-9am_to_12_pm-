// Today we learn sync
// Class 15
// Synchronous = That means single line thread code
// Synchronous code follows a line-by-line execution
console.log("Hello World"); // Prints "Hello World"
// Loop from 0 to 10, printing the current index
for (let i = 0; i <= 10; i++) {
    console.log("Loop calling", i); // Prints "Loop calling" followed by the current index
}
console.log("Fayaz Moosani"); // Prints "Fayaz Moosani"
const userName = "Wajid Ali";
console.log(userName); // Prints "Wajid Ali"
// Function to print a greeting message
const greetings = (name) => {
    console.log(`Hello ${name}`); // Prints "Hello" followed by the name
};
// Function to print the passed argument
const hello = (name) => {
    console.log(name); // Prints the passed argument
};
// Calling hello function with different types of arguments
hello("hello Dunya"); // Prints "hello Dunya"
hello(123); // Prints 123
hello(true); // Prints true
hello([123, 456]); // Prints [123, 456]
hello({ key: "Fayaz" }); // Prints { key: "Fayaz" }
// Random function that prints a message
const randomFunc = () => {
    console.log("Hello Dunya"); // Prints "Hello Dunya"
};
// Function that takes a callback and executes it
const helloSir = (callBack) => {
    callBack(); // Executing the callback function
};
helloSir(randomFunc); // Calls randomFunc, which prints "Hello Dunya"
// Function to sum two numbers
const sumTwoNumbers = () => {
    return 2 + 2; // Returns the sum of 2 and 2
};
// Function that takes another function and prints its result
const helloSum = (randomFun) => {
    console.log(randomFun()); // Execute the function to get the result and print it
};
helloSum(sumTwoNumbers); // Calls sumTwoNumbers and prints 4
// Function to sum two numbers
const sumTwoNumber = () => {
    return 2 + 5; // Returns the sum of 2 and 5
};
// Function that takes another function, adds 3 to its result, and prints it
const getNumbersAndAdd3 = (randomFn) => {
    console.log(randomFn() + 3); // Adds 3 to the result of the function call and prints it
};
getNumbersAndAdd3(sumTwoNumber); // Calls sumTwoNumber, adds 3 to 7, and prints 10
// Function to sum two numbers
const sumTwoNum = () => {
    return 4 + 5; // Returns the sum of 4 and 5
};
// Function that takes another function and prints its result
const anotherFunc = (param) => {
    console.log(param()); // Execute the function to get the result and print it
};
anotherFunc(sumTwoNum); // Calls sumTwoNum and prints 9
// Simple sync function with arrow function and parameter
const sumTwoNumb = () => {
    // Empty function, does nothing
};
let val = sumTwoNumb(); // Calls the empty function
console.log(val); // Prints undefined, because the function returns nothing
// Function that takes a parameter and prints it
function anotherFuncs(theFun) {
    console.log(theFun); // Prints the passed argument
}
anotherFuncs(54); // Prints 54
anotherFuncs("Hello World"); // Prints "Hello World"
export {};
// Code With FM => Fayaz Moosani
