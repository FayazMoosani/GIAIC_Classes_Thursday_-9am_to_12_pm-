// Class 16

// Call stack explanation
// The call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser)
// to keep track of its place in a script that calls multiple functions —
// it keeps track of what function is currently being run and
// what functions are called from within that function, etc.

// Example to illustrate the call stack
// console.log(a)
// logger("a")
// main()

// .ts refers to TypeScript. The converter or tool that converts TypeScript to JavaScript is called a transpiler.
// The full name of the process is transpilation.

// The interpreter is the component that executes the code,
// converting it from a higher-level language (like JavaScript) to machine code that the computer can understand.

let pubg; // Declaration of a variable 'pubg'
pubg = "we want ac environment, biryani and ice cream"; // Assignment of a string value to 'pubg'
console.log(pubg); // Logs the value of 'pubg' to the console

function makePizza() {
  return "Your delicious pizza is being prepared!"; // Function returns a string message
}
let order = makePizza(); // Calling the function and storing its return value in the variable 'order'
console.log(order); // Logs the value of 'order' to the console

// What is call stack?
// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser)
// to keep track of its place in a script that calls multiple functions —
// what function is currently being run and what functions are called from within that function, etc.

// When JavaScript code runs, the global execution context is created and placed on the call stack.

// Example to illustrate the call stack
// console.log(a)
// logger("a")
// main()

function makePizzas() {
  return "Your Pizzas is being prepared."; // Function returns a string message
}
let order1 = (makePizzas(), "Table 2"); // Executes makePizzas(), but order1 is assigned "Table 2" due to the comma operator
console.log(order1); // Logs "Table 2" to the console

let makeFries = () => {
  return "Your Fries are being ready!"; // Arrow function returns a string message
};
console.log(makeFries(), "Table 1"); // Logs the return value of makeFries() and "Table 1" to the console

// The arrow function is also known as a lambda function

// Creating a new promise 'sirZiaPromise'
let sirZiaPromise = new Promise((res, rej) => {
  res("Passed"); // Immediately resolves the promise with the value "Passed"
});
console.log(sirZiaPromise, "Sir Zia Promise"); // Logs the promise object and a message to the console

// Creating a new promise 'wajidPromised'
let wajidPromised = new Promise(function (reject, resolve) {
  reject("failed"); // Immediately rejects the promise with the value "failed"
});
console.log(wajidPromised, "Wajid Promise"); // Logs the promise object and a message to the console

// Creating a new promise 'ziaPromise'
let ziaPromise = new Promise((res, rej) => {
  res("Passed with Hafiz ki mithai"); // Immediately resolves the promise with the value "Passed with Hafiz ki mithai"
});
ziaPromise.then((response) => {
  // Sets up a handler for the resolved value
  console.log(response); // Logs the resolved value ("Passed with Hafiz ki mithai") to the console
});

// Creating a new promise 'ziaPromise2'
let ziaPromise2 = new Promise((res, rej) => {
  rej("Failed with ammi ki chapal"); // Immediately rejects the promise with the value "Failed"
});
ziaPromise2.catch((response) => {
  // Sets up a handler for the rejected value
  console.log(response); // Logs the rejected value ("Failed") to the console
});

// Creating a new promise 'sirZiaPromisess'
let sirZiaPromisess = new Promise((res, rej) => {
    rej("nahe ja raha me"); // Immediately rejects the promise with the value "nahe ja raha me"
  });
  
  // Handling the rejection of 'sirZiaPromisess'
  sirZiaPromisess.catch((error) => {
    console.log(error); // Logs the rejected value ("nahe ja raha me") to the console
  });
  
  // Defining an asynchronous function 'sirZiaPromisessStatus'
  async function sirZiaPromisessStatus() {
    try {
      // Awaiting the promise 'sirZiaPromisess'
      let status = await sirZiaPromisess;
      console.log(status, "try block"); // Logs the resolved value if the promise resolves (this line won't execute here)
    } catch (error) {
      // Handling the rejection of the promise
      console.log(error, "catch block"); // Logs the error ("nahe ja raha me") along with the message "catch block"
    }
  }
  
  // Calling the asynchronous function 'sirZiaPromisessStatus'
  sirZiaPromisessStatus();

  // Code With FM => FAYAZ MOOSANI