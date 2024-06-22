// Class_13
// Arrays methods: 'push', 'pop', 'shift', 'unshift', 'splice'
// Splice method - Type 01
const names = ["Fayaz", "Wajid", "Faraz", "Irfan"];
names.splice(1, 2, "Bilal"); // Removes "Wajid" and "Faraz" from index 1, and inserts "Bilal" at index 1
console.log("names", names); // Output: ["Fayaz", "Bilal", "Irfan"]
// Splice method - Type 02
const name = ["Fayaz", "Wajid", "Faraz", "Irfan"];
name.splice(0, 2, "Bilal Khan"); // Removes "Fayaz" and "Wajid" from index 0, and inserts "Bilal Khan" at index 0
console.log("names", name); // Output: ["Bilal Khan", "Faraz", "Irfan"]
// Splice method - Type 03
const name1 = ["Fayaz", "Wajid", "Faraz", "Irfan"];
name1.splice(1, 0, "Bilal"); // Inserts "Bilal" at index 1 without removing any elements
console.log("names", name1); // Output: ["Fayaz", "Bilal", "Wajid", "Faraz", "Irfan"]
const frt = ["Apple", "Banana", "Mango", "Watermelon"]; // Fixed-size array with specific string data types
// Multi-dimensional arrays
const multiArray = [[1, 2, 3]]; // Parent array with a single child array
console.log("MultiDimensionArray", multiArray); // Output: [[1, 2, 3]]
const multiArray1 = [[1, 2, 3]];
console.log("MultiDimensionArray", multiArray1[0]); // Accessing the child array, Output: [1, 2, 3]
const multiArray2 = [1, 2, 5, [1, 2, 3]];
console.log("MultiDimensionArray", multiArray2[3]); // Correctly accessing the nested child array, Output: [1, 2, 3]
let multiArrays3 = [100000, 150000, 330000, ["Civic", "Corolla", "Ferrari"]]; // Multi-dimensional array with mixed types
console.log(multiArrays3); // Output: [100000, 150000, 330000, ["Civic", "Corolla", "Ferrari"]]
const nestedArray = [1, 121, ["Fayaz", "Wajid"]];
console.log(nestedArray, [2][0], "nestedArrays"); // Accessing nested elements incorrectly, should be nestedArray[2][0]
let data = {
    name: "Fayaz Ahmed",
    class: "Thursday",
    age: 23,
    bachNo: "Quarter 01",
}; // Object with properties from both Intersection and Intersection1 types
console.log(data); // Output: { name: "Fayaz Ahmed", class: "Thursday", age: 23, bachNo: "Quarter 01" }
// As method for type casting
let numberss = 18749812; // Type casting to number
console.log(numberss); // Output: 18749812
let num1 = 23847338913; // Type casting to number
let num2 = "Fayaz"; // Type casting to string
console.log(num1, num2); // Output: 23847338913 "Fayaz"
export {};
// CODE WITH FM => Fayaz Moosani
