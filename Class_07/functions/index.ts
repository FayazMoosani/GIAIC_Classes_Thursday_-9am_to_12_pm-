#!/usr/bin/env node
// Class_08
// Type of function

// 01
// A function that can't change any value (sugar, milk, water)
function tea() {
    // Sugur Milk  Water
    let cooked = 1 + 2 + 1.5;  // Fixed ingredients
    console.log(cooked);       // Outputs: 4.5
}
tea();

// Type 02
// A function that can change the value of sugar, but not milk and water
function tea1(sugar: number) {
    // Sugur Milk  Water
    let cooked = sugar + 1 + 3;  // Variable sugar, fixed milk and water
    console.log(cooked);         // Outputs the result based on the provided sugar value
}
tea1(3);  // Outputs: 7

// Type 03
// A function that can change any two values (sugar, milk), but not water
function tea2(sugar: any, milk: any) {
    // Sugur Milk  Water
    let cooked = sugar + milk + 3;  // Variable sugar and milk, fixed water
    console.log(cooked);            // Outputs the result based on provided sugar and milk values
}
tea2(3, 2);  // Outputs: 8 (Wajid)
tea2(1, 2);  // Outputs: 6 (Fayaz)

// Type 04
// A function that can change any value (sugar) and return the result, can't change milk and water
function tea3(sugar: number) {
    // Sugur Milk  Water
    let cooked = sugar + 1 + 3;  // Variable sugar, fixed milk and water
    console.log(cooked);         // Outputs the result
    return cooked;               // Returns the result
}
let response0 = tea3(2);  // Outputs: 6
console.log(response0);   // Outputs: 6

// Type of arrow function
let tea4 = () => 1 + 3 + 5;  // Fixed ingredients, using an arrow function
let response = tea4();
console.log(response);      // Outputs: 9

// Type of simple function 
function teas() {
    console.log(1 + 3 + 5);  // Fixed ingredients
}
let response2 = teas();  // Outputs: 9
console.log(response2);  // Outputs: undefined (since teas() does not return a value)

// Type of anonymous function
let halfFry = function() {
    let cooked = 1 + 2 + 5;  // Fixed ingredients
    return cooked;           // Returns the result
}
console.log(halfFry());  // Outputs: 8

// Code with FM => Fayaz Moosani
