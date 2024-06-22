// Class_14
// Loops
let a = 0;
if (a < 1) {
    // This if statement is true, but it does nothing inside
}
// Example loop: iterates from 1 to 9
for (let count = 1; count < 10; count++) {
    console.log(count, "Hello Wajid"); // Prints the count and "Hello Wajid"
    console.log("I am Fayaz"); // Prints "I am Fayaz"
}
// Function to print the multiplication table of a given number
let printTable = (num) => {
    // Loop from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`); // Prints the multiplication result
    }
};
printTable(10); // Calling the function to print the table of 10
// Another function to print the multiplication table of a given number
let table_of_five = (num1) => {
    // Loop from 1 to 10
    for (let e = 1; e <= 10; e++) {
        console.log(`${num1} * ${e} = ${num1 * e}`); // Prints the multiplication result
    }
};
table_of_five(11); // Calling the function to print the table of 11
// Function to calculate the sum of numbers from 1 to the given number
const sumOfN = (num) => {
    let sum = 0; // Initialize sum to 0
    // Loop from 1 to the given number
    for (let j = 1; j <= num; j++) {
        sum = sum + j; // Add the current number to sum
    }
    console.log(sum); // Print the sum
};
sumOfN(5); // Calling the function to calculate the sum of numbers from 1 to 5
let i = 0; // Initialize i to 0
// While loop: runs as long as i is less than 10
while (i < 10) {
    console.log(i, "i"); // Prints the current value of i
    i++; // Increment i by 1
}
let obj = {
    name: "Fayaz",
    batch: "Thursday"
};
// console.log(obj.name) // Dot notation to access object properties
console.log(obj["name"]); // Array notation to access object properties, prints "Fayaz"
let obj1 = {
    name: "Fayaz",
    batch: "Thursday",
    isAvailable: true
};
// For-in loop to iterate over the properties of an object
for (let x in obj1) {
    console.log(x, "X"); // Prints the property name
}
export {};
// Code With FM => Fayaz Moosani
