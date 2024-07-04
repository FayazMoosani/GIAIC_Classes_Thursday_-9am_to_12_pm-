// Class_19
// revision classes
//variables 
// Prints "Hello World" to the console
console.log("Hello World");
// Variable to store the name of a user
let userName = "Fayaz";
// Variable to store another user's name, typo in variable name corrected
let userName1 = "wajid";
// Variable to store yet another user's name
let user_name = "fawad";
// Variable to store the date of birth
let dateOfBirth = 20;
// Variable to store the king's name, using $ is unconventional but valid
let $king = "Fayaz Ahmed";
// Variable to store Wajid's date of birth, name corrected to camelCase
let dateOfBirthWajid = 20;
// Updating the userName variable with a new value
userName = "Suhail Khan";
if (true) {
    // This block always executes because the condition is true.
    let age = 22; // Variable 'age' is declared and initialized to 22 within this block scope.
}
// console.log(age,"age") // This line is commented out. If uncommented, it would cause an error because 'age' is not accessible outside the block.
if (true) {
    // This block always executes because the condition is true.
    let agez = 22; // Variable 'agez' is declared and initialized to 22 within this block scope.
    console.log(agez, "age"); // This prints '22 age' to the console because 'agez' is accessible within this block.
}
let age1 = 25; // Variable 'age1' is declared and initialized to 25 in the outer scope.
if (true) {
    // This block always executes because the condition is true.
    let age1 = 50; // A new variable 'age1' is declared within this block, shadowing the outer 'age1'.
    // This 'age1' is only accessible within this block and is initialized to 50.
}
console.log(age1); // This prints '25' to the console because the outer 'age1' (initialized to 25) is not affected by the inner block.
// self searching / study of variables
// Example demonstrating different types of variables in TypeScript
// 1. Using `let` for block-scoped variables
let count = 10; // A block-scoped variable 'count' of type number initialized to 10
if (true) {
    let count = 20; // A different block-scoped variable 'count' inside this block, initialized to 20
    console.log(count); // Outputs: 20 (the inner 'count')
}
console.log(count); // Outputs: 10 (the outer 'count')
// 2. Using `const` for block-scoped constants
const pi = 3.14; // A block-scoped constant 'pi' of type number initialized to 3.14
// pi = 3.15; // Error: Cannot assign to 'pi' because it is a constant
// 3. Using `var` for function-scoped variables
var name = "Alice"; // A function-scoped variable 'name' of type string initialized to "Alice"
if (true) {
    var name = "Bob"; // The same function-scoped variable 'name' reinitialized to "Bob"
    console.log(name); // Outputs: Bob
}
console.log(name); // Outputs: Bob (var is function-scoped, not block-scoped)
// 4. Primitive types
let age = 25; // A variable 'age' of type number initialized to 25
let greeting = "Hello"; // A variable 'greeting' of type string initialized to "Hello"
let isActive = true; // A variable 'isActive' of type boolean initialized to true
let data = null; // A variable 'data' of type null initialized to null
let notAssigned = undefined; // A variable 'notAssigned' of type undefined initialized to undefined
let sym = Symbol("unique"); // A variable 'sym' of type symbol initialized to a unique symbol
let bigNumber = 100n; // A variable 'bigNumber' of type bigint initialized to 100n
// 5. Object types
let person = { name: "Alice", age: 25 }; // An object with properties 'name' and 'age'
let numbers = [1, 2, 3]; // An array of numbers
let tuple = ["Alice", 25]; // A tuple with a string and a number
// 6. Function types
let greet = function (name) {
    return `Hello, ${name}`; // A function that takes a string and returns a string
};
console.log(greet("Alice")); // Outputs: Hello, Alice
// 7. Special types
let randomValue = 42; // A variable of type 'any' that can hold any value
randomValue = "Hello"; // Reassigned to a string
randomValue = true; // Reassigned to a boolean
let unknownValue = 42; // A variable of type 'unknown' that can hold any value, but requires type checking before use
if (typeof unknownValue === "number") {
    let value = unknownValue; // Type assertion required to use 'unknownValue' as a number
    console.log(value); // Outputs: 42
}
// type of variables
// primitive data type
// Declare a string variable userNames and assign it the value "fayaz king"
let userNames = "fayaz king";
// Declare a number variable dob and assign it the value 22
let dob = 22;
// Declare a boolean variable isLeadFaculty and assign it the value true
let isLeadFaculty = true;
// Declare a variable noValue and assign it the value undefined
let noValue = undefined;
// Print the value of userNames to the console
console.log(userNames); // Outputs: "fayaz king"
// Declare a number variable dob1 and assign it the value 26
let dob1 = 26;
// Declare a number variable dob2 and assign it the value of dob1 plus 1
let dob2 = dob1 + 1;
// Print the value of dob2 to the console with the label "dob"
console.log(dob2, "dob"); // Outputs: 27 "dob"
// Declare a string variable nameOfPerson and assign it the value "wajid khan"
let nameOfPerson = "wajid khan";
// Reassign nameOfPerson to the value "Wajid Bhai"
nameOfPerson = "Wajid Bhai";
// Declare a string variable nameOfPerson1 and assign it the value "Fawad Khan"
let nameOfPerson1 = "Fawad Khan";
// Reassign nameOfPerson1 to the value of nameOfPerson
nameOfPerson1 = nameOfPerson;
// Print the value of nameOfPerson1 to the console
console.log(nameOfPerson1); // Outputs: "Wajid Bhai"
// Objects 
// Declare an object variable obj with multiple properties
let obj = {
    name: "Hello jani",
    class: "thursday",
    name1: "Hello Fayaz",
    class1: "thursday",
    name2: "Hello Wajid",
    class2: "thursday",
    name3: "Hello Fawad",
    class3: "thursday",
    name4: "Hello suhail",
    class4: "thursday",
    name5: "Hello faraz",
    class5: "thursday",
    name6: "Hello awais",
    class6: "thursday"
};
// Declare an object objs that conforms to the MyObject interface
let objs = {
    name: "Fayaz",
    class: "thursday"
};
// Create a shallow copy of objs and assign it to obj2
let obj2 = { ...objs };
// Add the age property to obj2 and set it to 22
obj2.age = 22;
// Print the value of obj2 to the console
console.log(obj2); // Outputs: { name: 'Fayaz', class: 'thursday', age: 22 }
// Print the value of objs to the console
console.log(objs); // Outputs: { name: 'Fayaz', class: 'thursday' } (unchanged)
// Arrays
// Define an array 'arr' containing numbers from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Print the element at index 5 of the 'arr' array to the console
console.log(arr[5]); // Outputs: 6 (arrays in JavaScript are zero-indexed, so arr[5] accesses the 6th element)
// Define an array 'newArrOf' containing strings
let newArrOf = ["Fayaz", "Faraz", 'Wajid', "Fawad"];
// Print the entire 'newArrOf' array to the console
console.log(newArrOf); // Outputs: ["Fayaz", "Faraz", 'Wajid', "Fawad"] (prints the entire array)
// Define an array 'newArr' containing strings
let newArr = ["Fayaz", "Faraz", 'Wajid', "Fawad"];
// Access an element at an invalid index (-1) in the 'newArr' array
// JavaScript arrays do not support negative indices to access elements from the end of the array
console.log(newArr[-1]); // Outputs: undefined (undefined because [-1] is not a valid index in JavaScript arrays)
// strong typing
let itClasses = "Thursday";
itClasses = 44; // if you can't define the type of variable then it's error
// In summary, while TypeScript supports strong typing through explicit type annotations 
// and static type checking, using any reduces the benefits of strong typing 
// by allowing dynamic type assignments and bypassing type checks. 
// It's generally recommended to use specific types (string, number, etc.)
// whenever possible to leverage TypeScript's static type checking capabilities effectively.
// self search
// Example TypeScript file demonstrating type errors with block-scoped variables
// // Scenario 1: Redefining block-scoped variable with 'let'
// let x = 10;
// let x = 20; // Error: Cannot redeclare block-scoped variable 'x'.
// // Scenario 2: Accessing variable before initialization
// console.log(y); // Error: Cannot access 'y' before initialization
// let y = 10;
// // Scenario 3: Type mismatch with 'let'
// let a: number = 10;
// a = "hello"; // Error: Type '"hello"' is not assignable to type 'number'.
// // Scenario 4: Redefining block-scoped variable with 'const'
// const z = 100;
// const z = 200; // Error: Cannot redeclare block-scoped variable 'z'.
// // Scenario 5: Type mismatch with 'const'
// const b: number = 10;
// b = "world"; // Error: Cannot assign to 'b' because it is a constant.
// Scenario 6: Variable shadowing within nested scopes
let outer = "outer";
if (true) {
    let outer = 20; // Shadows the outer variable
    console.log(outer); // Outputs: 20
}
console.log(outer); // Outputs: "outer"
// // Scenario 7: Accessing 'const' variable before initialization
// console.log(c); // Error: Cannot access 'c' before initialization
// const c = "constant";
// Scenario 8: Using 'const' with mutable objects
// const obj = { name: "Alice" };
// obj.name = "Bob"; // Valid: Mutating the object's properties is allowed
// obj = { name: "Charlie" }; // Error: Cannot assign to 'obj' because it is a constant
// Scenario 9: Initializing 'const' with incompatible types
// const d: number = 10;
// d = "world"; // Error: Cannot assign to 'd' because it is a constant.
// Scenario 10: Use of 'let' and 'const' with implicit 'any' types
let e; // 'e' is implicitly of type 'any'
e = 10;
e = "hello"; // No error because 'e' is of type 'any'
const f = []; // 'f' is implicitly of type 'any[]'
f.push(1); // Valid: Pushing to an array is allowed
f.push("world"); // Valid: Arrays in TypeScript can hold multiple types
console.log("TypeScript file executed successfully.");
// any defference unknown
// Define a variable 'myVar' with type 'any'
let myVar = "Hello";
console.log(myVar); // Outputs: "Hello"
// Reassign 'myVar' to a number
myVar = 10;
console.log(myVar); // Outputs: 10
// Access 'length' property on 'myVar' (no TypeScript error, because 'any' allows any type)
let length = myVar.length;
console.log(length); // Outputs: undefined (since 'myVar' is now a number, 'length' is undefined)
// Change the type definition to 'unknown'
let userInput = "Hello";
console.log(userInput); // Outputs: "Hello"
// Access 'length' property on 'userInput' (TypeScript error, because 'unknown' does not allow property access)
// let length = userInput.length; // Uncommenting this line will result in a TypeScript error
// Check and assign 'length' only if 'userInput' is of type 'string'
if (typeof userInput === "string") {
    let length = userInput.length;
    console.log(length); // Outputs: 5 (length of "Hello")
}
// Try assigning 'userInput' to different types
userInput = 10; // Valid, because 'unknown' allows any type assignment
console.log(userInput); // Outputs: 10
userInput = { name: "Alice" }; // Valid, can assign objects too
console.log(userInput); // Outputs: { name: 'Alice' }
// type define unknown and use touppercase and tofixed
// Define a variable 'myVar' with type 'unknown'
let myVar1 = "hello";
console.log(myVar1); // Outputs: "hello"
// Try to use 'toUpperCase()' on 'myVar' (Error: 'unknown' does not allow string methods)
// let upperCaseVar = myVar.toUpperCase(); // Uncommenting this line will result in a TypeScript error
// Type assertion: Assert 'myVar' is of type 'string'
if (typeof myVar === "string") {
    let upperCaseVar = myVar.toUpperCase();
    console.log(upperCaseVar); // Outputs: "HELLO"
}
// Reassign 'myVar' to a number
myVar = 10;
console.log(myVar); // Outputs: 10
// Try to use 'toFixed()' on 'myVar' (Error: 'unknown' does not allow number methods)
// let fixedVar = myVar.toFixed(); // Uncommenting this line will result in a TypeScript error
// Type assertion: Assert 'myVar' is of type 'number'
if (typeof myVar === "number") {
    let fixedVar = myVar.toFixed(2);
    console.log(fixedVar); // Outputs: "10.00"
}
// Assign 'myVar' to a different type
myVar = { name: "Alice" };
console.log(myVar); // Outputs: { name: 'Alice' }
function helloworld() {
}
const sayHello = () => { };
export {};
// if we change the reserve keys then show syntax error
// letttt num = 5   this is the syntax error
// functionnnnn sayhello (){}   syntax error
// next week we learn "Hooks"
// Code With FM => FAYAZ MOOSANI
