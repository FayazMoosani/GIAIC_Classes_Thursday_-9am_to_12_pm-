// Class 12
// Arrays types
// Simple array declaration and initialization
const student = ["Fayaz Moosani", "Wajid Ali", "Faraz Shah"];
console.log("Student", student);
// Arrays with different data types
const number = [1, 2, 3, 4, 5];
const boolArrays = [true, false, true];
const mixedArrays = ["Fayaz", 1220545, true, "Wajid Ali"];
console.log(number, boolArrays, mixedArrays);
// Practice: Array representation of pharmaceutical products
const pharma = ["Syp Cefpower 40mg"];
const pharma1 = ["Tab Cefpower 100mg"];
const pharma2 = ["Tab Plagesic 50mg"];
console.log(pharma, "Price: 280", pharma1, "Price: 380", pharma2, "Price: 160");
// Type-defined arrays with single and multiple data types
let students = ["Wajid", "Fayaz"];
let students1 = ["Fayaz", 786, "Wajid", 786];
let students2 = ["Death", 786, true, "World", 86, false];
console.log(students1);
console.log(students2);
// Accessing array elements by index
let newArryas = ["Maria", "Fayaz"];
console.log(newArryas[0]); // Outputs: Maria
console.log(newArryas[1]); // Outputs: Fayaz
// Task: Print elements at index 3 and index 5 of the array
let newArryas1 = ["Fayaz", "Wajid", "Faraz", "Maria", "Owais", "Shah"];
console.log(newArryas1[2]); // Outputs: Faraz
console.log(newArryas1[4]); // Outputs: Owais
// Dynamic replacement of array elements
let teacher = ["Miss Minahil", "Sir Hamza", "Sir Ameen Aalam", "Hamza Alvi", "Miss Maria"];
teacher[1] = "Fayaz"; // Replacing "Sir Hamza" with "Fayaz"
console.log("Teachers: ", teacher);
// Array methods: push, pop, unshift, shift
let teacher1 = ["Miss Minahil", "Sir Hamza", "Sir Ameen Aalam", "Hamza Alvi", "Miss Maria"];
teacher1.push("Dua"); // Adding "Dua" to the end of the array
console.log("Teachers: ", teacher1);
let teacher2 = ["Miss Minahil", "Sir Hamza", "Sir Ameen Aalam", "Hamza Alvi", "Miss Maria"];
teacher2.pop(); // Removing the last element from the array
console.log("Teachers: ", teacher2);
let teacher3 = ["Miss Minahil", "Sir Hamza", "Sir Ameen Aalam", "Hamza Alvi", "Miss Maria"];
teacher3.unshift("Fayaz"); // Adding "Fayaz" to the beginning of the array
console.log("Teachers: ", teacher3);
let teacher4 = ["Miss Minahil", "Sir Hamza", "Sir Ameen Aalam", "Hamza Alvi", "Miss Maria"];
teacher4.shift(); // Removing the first element from the array
console.log("Teachers: ", teacher4);
export {};
// Summary of array methods:
// push method: Adds a value to the end of the array
// pop method: Removes the last value from the array
// unshift method: Adds a value to the beginning of the array
// shift method: Removes the first value from the array
// 
