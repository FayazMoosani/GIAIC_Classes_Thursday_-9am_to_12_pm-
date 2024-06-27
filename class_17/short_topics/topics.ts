// Class 18
// Ternary Operator

// In TypeScript, a ternary operator is a shorthand way to perform conditional checks.
//  It is also known as the conditional operator and works similarly to how it works
// in JavaScript. The ternary operator evaluates a condition and returns one value
// if the condition is true and another value if the condition is false.

// The syntax for the ternary operator is:
// condition ? expression If True : expression If False;

// Example in TypeScript:
// Here's an example to illustrate the use of the ternary operator in TypeScript:

let isLoggedIn: boolean = true;
let welcomeMessage: string = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(welcomeMessage); // Outputs: Welcome back!

// In this example, the ternary operator checks the value of isLoggedIn.
//  If isLoggedIn is true, welcomeMessage is assigned the value "Welcome back!".
//   If isLoggedIn is false, welcomeMessage is assigned the value "Please log in.".

let age: number = 18;
let canVote: string = age >= 18 ? "You can vote" : "You cannot vote";

console.log(canVote); // Outputs: You can vote

// Using Ternary Operators with Type Annotations:
// TypeScript allows you to use type annotations with ternary operators to ensure type safety:

let userAge: number = 20;
let ageGroup: string =
  userAge < 13 ? "child" : userAge < 20 ? "teenager" : "adult";

console.log(ageGroup); // Outputs: adult

// In this example, userAge is checked against multiple conditions
// using nested ternary operators. Depending on the value of userAge, ageGroup
// is assigned either "child", "teenager", or "adult".

// Summary:
// The ternary operator in TypeScript provides a concise way to perform conditional checks
// and assign values based on those checks.
// It improves code readability and reduces the need for multiple lines of if-else statements.
// The type safety provided by TypeScript ensures that the values returned
// by the ternary operator match the expected types, making your code more robust and
// less error-prone.

let userName = "Fayaz Moosani";

// if-else condition
if (userName == "Fayaz") {
  console.log(`Hello ${userName}`);
} else {
  console.log("User name is not found");
}

// The above if-else condition checks if userName is exactly "Fayaz".
// If true, it prints a greeting message.
// Otherwise, it prints that the user name is not found.

let result =
  userName == "Fayaz Moosani"
    ? console.log(`Salam ${userName}`)
    : console.log("User Name is not found");

// The ternary operator is used here to perform a similar check.
// If userName is "Fayaz Moosani", it prints a greeting in another language.
// Otherwise, it prints that the user name is not found.

// ? // denotes the 'if' condition
// : // denotes the 'else' condition

let userActive = "login";

// if-else condition
if (userActive === "logout") {
  console.log("User is inactive");
} else {
  console.log("User is active");
}

// This if-else condition checks if userActive is "logout".
// If true, it prints that the user is inactive.
// Otherwise, it prints that the user is active.

// ternary operator condition
let result1 = userActive === "login" ? "User is active" : "User is inactive";
console.log(result1, "result1");

// The ternary operator here checks if userActive is "login".
// If true, it assigns "User is active" to result1.
// Otherwise, it assigns "User is inactive".
// The result is then printed to the console.

// modules

// In TypeScript, a module is a way to encapsulate and organize code into reusable units.
// Modules help in maintaining a clean and organized codebase by breaking down complex
// applications into smaller, manageable parts.
// Each module can contain classes, functions, interfaces,
// and other code elements, which can be exported and imported as needed.

// Modules in TypeScript are based on the ES6 (ECMAScript 2015)
// module syntax and offer a way to structure code in a way that makes it easier to
// manage dependencies and avoid global scope pollution.




// Declare string variables for different sections of the navbar
let h = "hello";
let cnt = "contact us";
let ab = "about us";

// Export a function named navbar
export function navbar() {
  // Log the values of the navbar sections to the console
  console.log(h);  // Outputs: hello
  console.log(cnt); // Outputs: contact us
  console.log(ab); // Outputs: about us
}

// Call the navbar function to execute the console logs
navbar();

// Export a constant named addition which is an arrow function
export const addition = (num1: number, num2: number, num3: number) => {
  // Calculate the sum of the three numbers and log the result to the console
  console.log(num1 + num2 + num3); // Outputs: 9 when called with addition(2, 3, 4)
};

// Call the addition function with the arguments 2, 3, and 4
addition(2, 3, 4);


// Code With FM => FAYAZ MOOSANI