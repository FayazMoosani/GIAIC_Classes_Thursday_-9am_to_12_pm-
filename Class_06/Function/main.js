// Class_07
// Practice_ if, else, if - else____28/03/24
let day = "Thursday";
// Check if the day is Thursday
if (day == "Thursday") {
    console.log("You are allowed to join the class");
}
else if (day == "morning") { // Check if the day is morning (note: this comparison may need re-evaluation)
    console.log("You are allowed to join the class");
}
else { // Default case if the day is neither Thursday nor morning
    console.log("You are not allowed to join the class");
}
// Project_05 function examples
// Function to simulate half-fry dish with egg, butter, and salt
function halfFry1() {
    console.log(1 + 2 + 1.5); // Example values for egg, butter, and salt
}
halfFry1(); // Outputs: 4.5
// Function to simulate mixed vegetables dish with fixed ingredients
function mixSabzi2() {
    console.log(2.3 + 3 + 4 + 9 + 7 + 1.4); // Example values for butter, onion, tomato, potato, littlefinger, and salt
}
mixSabzi2(); // Outputs: 26.7
mixSabzi2();
mixSabzi2();
// Function to simulate mixed vegetables dish with variable salt value
function mixSabzi1(salt) {
    console.log(2.3 + 3 + 4 + 9 + 7 + salt); // Example values with variable salt
}
mixSabzi1(1.1); // Example for Fayaz
mixSabzi1(1.3); // Example for Wajid
mixSabzi1(1.7); // Example for Faraz
// Function to simulate mixed vegetables dish with variable onion and salt values
function mixSabzi(onion, salt) {
    console.log(2.3 + 3 + 4 + 9 + 7 + salt); // Example values with variable onion and salt
}
mixSabzi(3, 1.3); // Example for Fayaz
mixSabzi(2, 1.4); // Example for Wajid
mixSabzi(5, 1.7); // Example for Faraz
// Function to simulate half-fry dish with variable salt and butter values
function halfFry2(salt, butter) {
    let cooked = 1 + salt + butter; // Example values for egg, salt, and butter
    return cooked;
}
let delivery1 = halfFry2(1, 2);
console.log(delivery1); // Outputs: 4 for Fayaz
let delivery2 = halfFry2(1, 4);
console.log(delivery2); // Outputs: 6 for Wajid
// Half-fry dish recipe function with egg, salt, and butter
function halfFry(salt, butter) {
    let cooked = 1 + salt + butter; // Example values for egg, salt, and butter
    return cooked;
}
let table_1 = halfFry(1, 3); // Example for table 1
let table_2 = halfFry(1, 2); // Example for table 2
let table_3 = halfFry(2, 3.5); // Example for table 3
console.log(table_1, table_2, table_3); // Outputs: 5, 4, 6.5
export {};
