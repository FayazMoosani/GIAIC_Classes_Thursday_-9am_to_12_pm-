"use strict";
// Class_05
// Lesson_01
// if else statement
Object.defineProperty(exports, "__esModule", { value: true });
// Simple if statement
if (true) {
    console.log("Hello"); // This will always execute because the condition is always true
}
// if, else condition
let myAge = 18;
if (myAge >= 18) { // Checks if the age is 18 or older
    console.log("You're allowed"); // This will execute if myAge is 18 or more
}
else {
    console.log("You're not allowed"); // This will execute if myAge is less than 18
}
// Nested if-else condition
let monthz = "Ramdan";
if (monthz == "Feb") { // Checks if the month is February
    console.log("water bottle is allowed");
}
else {
    if (monthz == "Ramadan") { // Checks if the month is Ramadan (note the typo in the value "Ramdan")
        console.log("water bottle is not allowed");
    }
    console.log("water bottle is allowed"); // This will always execute for any month other than February
}
// if, else if, else condition
let months = "May";
if (months == "Ramadan") { // Checks if the month is Ramadan
    console.log("water bottle is not allowed");
}
else if (months == "March") { // Checks if the month is March
    console.log("water bottle is not allowed");
}
else {
    console.log("water bottle is allowed"); // Default case for any other month
}
// Short-circuit evaluation
let tools = false;
let month = tools && "UPS"; // If tools is false, month will be false
console.log(month); // Outputs: false
// Short-circuit condition examples
// Example 1
let null1 = "Hot Water";
let null2 = "Cold Water";
let null3 = "No Water";
let month1 = null1 || (null2 && null3); // Outputs null1 because it's truthy and OR short-circuits
console.log(month1); // Outputs: Hot Water
// Example 2
let null4 = "Hot Water";
let null5 = "Cold Water";
let null6 = "No Water";
let month2 = null4 && (null5 || null6); // Outputs null5 because null4 is truthy and AND continues evaluation
console.log(month2); // Outputs: Cold Water
// Practice: if, else if, else
let day = "Thursday";
if (day == "Thursday") { // Checks if the day is Thursday
    console.log("You are allowed to join the class");
}
else if (day == "morning") { // Checks if the time is morning (though it's an unusual comparison)
    console.log("You are allowed to join the class");
}
else {
    console.log("You are not allowed to join the class"); // Default case for any other day/time
}
// Project_06 function examples
// Function to simulate half-fry dish
function halfFry() {
    console.log(1 + 2 + 1.5); // Simulates the ingredients total
}
halfFry(); // Outputs: 4.5
console.log(2.3 + 3 + 4 + 9 + 7); // Outputs: 25.3
// Function to simulate mixed vegetables dish
function mixSabzi() {
    // The function currently does nothing
    // console.log(2.3 + 3 + 4 + 9 + 7); // This line is commented out
}
mixSabzi();
mixSabzi();
mixSabzi(); // These calls do nothing as the function is empty
