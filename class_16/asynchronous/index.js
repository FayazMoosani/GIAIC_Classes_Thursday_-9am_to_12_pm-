// Class 17
// Asynchronous
// JavaScript asynchronous behaviour
// 01 Promises
// 02 async
// 03 setTimeout
// 04 location
// 05 bluetooth
// 06 callBack (pyramid of doom/callback hell)
// Callback function example
const firstFunc = (cb1) => {
    cb1(); // Call the callback function
};
const hellWorld = () => {
    console.log("Hello world");
};
firstFunc(hellWorld); // Passing hellWorld as a callback to firstFunc
// Promise examples
const Promise1 = new Promise((resolve, reject) => {
    resolve(2); // Resolve the promise with the value 2
}).then((res) => {
    let add = res + 3; // Add 3 to the resolved value
    console.log(`Promise1 result: ${add}`);
});
const Promise2 = new Promise((resolve, reject) => {
    resolve(2); // Resolve the promise with the value 2
}).then((res) => {
    let minus = res - 1; // Subtract 1 from the resolved value
    console.log(`Promise2 result: ${minus}`);
});
const Promise3 = new Promise((resolve, reject) => {
    resolve(2); // Resolve the promise with the value 2
}).then((res) => {
    let multiple = res * 3; // Multiply the resolved value by 3
    console.log(`Promise3 result: ${multiple}`);
});
const Promise4 = new Promise((resolve, reject) => {
    resolve(2); // Resolve the promise with the value 2
}).then((res) => {
    let divide = res / 3; // Divide the resolved value by 3
    console.log(`Promise4 result: ${divide}`);
});
// Set Timeout example
console.log("Hello dear World");
setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);
console.log("Fayaz Moosani console log called");
console.log("Hello dear Wajid");
setTimeout(() => {
    console.log("setTimeout delayed for 5 seconds");
}, 5000);
console.log("Display before setTimeout");
export {};
// Code With FM => FAYAZ MOOSANI
