// Class_09
// Types Of Functions > Rest Functions : 01

function greet(name: string, age: number, rest: any) {
  // Function with name, age, and a rest parameter
  console.log("Hello", name, age);
}
greet("Fayaz", 23, "Thursday Morning"); // Outputs: Hello Fayaz 23

function salam(rest: any) {
  // Function with a rest parameter (currently does nothing)
}

// Types of Functions > Rest Functions : 02

// Default function parameter example
function movie1(name: string, releaseDate?: number) {
  // releaseDate is optional
  console.log(`This movie name is ${name} and release date is ${releaseDate}`);
}
movie1("Titanic"); // Outputs: This movie name is Titanic and release date is undefined

// Types of Functions > Rest Functions : 03

function movie(name: string, releaseDate: number = 2024) {
  // releaseDate has a default value of 2024
  console.log(`This movie name is ${name} and release date is ${releaseDate}`);
}
movie("Titanic"); // Outputs: This movie name is Titanic and release date is 2024
movie("Avenger EndGame", 2022); // Outputs: This movie name is Avenger EndGame and release date is 2022

// Arrow functions

const sayHello = () => {
  // Arrow function with no parameters
  console.log("Hello World");
};
sayHello(); // Outputs: Hello World

// Single line arrow function

const sayHello2 = () => console.log("Hello World 123");
sayHello2(); // Outputs: Hello World 123

// Single line arrow function with parameters

const sayHello3 = (userName: string, age: number) =>
  console.log(`Hello World Dear ${userName} ${age}`);
sayHello3("Fayaz Ahmed", 23); // Outputs: Hello World Dear Fayaz Ahmed 23
sayHello3("Owais", 19);       // Outputs: Hello World Dear Owais 19
sayHello3("Wajid", 21);       // Outputs: Hello World Dear Wajid 21

// How to work return property
// 1st addition then subtraction

const calculator = (num1: number, num2: number) => {
  let result = num1 + num2; // Adds num1 and num2
  return result;
};
let addition = calculator(1, 2); // Outputs: 3
console.log(addition - 1);       // Outputs: 2

// 1st subtraction then addition

const calculator1 = (num1: number, num2: number) => {
  let result = num1 - num2; // Subtracts num2 from num1
  return result;
};
let subtraction = calculator1(5, 8); // Outputs: -3
console.log(addition + 100);         // Outputs: 103 (3 + 100)

// Objects print with array

let student = [
  {
    userName: "Fayaz",
    age: 23,
    class: "Thursday",
    role: "Student",
  },
];
console.log(student); // Outputs the student array with one student object

let student2 = [
  {
    userName: "Wajid Khan",
    age: 21,
    class: "Thursday",
    role: "Student",
  },
];
console.log(student2); // Outputs the student2 array with one student object

let student1 = [
  {
    userName: "Owais Khan",
    age: 19,
    class: "Thursday",
    role: "Student",
  },
];
console.log(student1); // Outputs the student1 array with one student object

// Object print one property value

let student4 = {
  userName: "Shehzad",
  age: 19,
  class: "Thursday",
  role: "Student",
};
console.log(student4.userName); // Outputs: Shehzad

let xli = {
  Name: "GLI",
  color: "White",
  modelNumber: "2024",
  powerSteering: false,
  horsePower: "1300cc",
};
console.log(xli); // Outputs the xli object with all its properties

// Code With FM => FAYAZ MOOSANI
