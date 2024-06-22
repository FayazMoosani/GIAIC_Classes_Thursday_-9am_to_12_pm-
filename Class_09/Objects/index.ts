// class 10
// Objects

let student = {
  username: "Fayaz",
  lastname: "Moosani",
  slot: "Thursday",
  teacher: "Miss Manaheel",
};
console.log(`my name is: ${student.username}`); // Outputs: my name is: Fayaz
console.log(student.username);                  // Outputs: Fayaz

let students: {
  name: string;
  age: number;
  gender: string;
  email: string;
  dob: number;
} = {
  name: "Fayaz Ahmed",
  age: 23,
  gender: "Male",
  email: "afayaz293@gmail.com",
  dob: 0o5042003, // Octal literal for 042003
};

let car = {
  name: "honda civic",
  model: 2021,
  color: "black",
  stearingpower: "yes",
};
console.log(car); // Outputs the car object with all its properties

// This command ensures that only the specified properties are included in the object
// If there are extra or missing properties, an error will be shown

let employeeData: { name: string; email: string; age: number } = {
  name: "Fayaz Ahmed",
  email: "afayaz293@gmail.com",
  age: 23,
};
console.log(employeeData); // Outputs the employeeData object with all its properties

let student1: { name: string; email: string; age: number; dob: number } = {
  name: "Fayaz Ahmed Moosani",
  email: "afayaz293@gmail.com",
  age: 23,
  dob: 0o5042003, // Octal literal for 042003
};
console.log(student1); // Outputs the student1 object with all its properties

let car1: {
  name: string;
  color: string;
  horsepower: number;
  powerstearing: string;
} = {
  name: "Grande",
  color: "black",
  horsepower: 1600,
  powerstearing: "true",
};
console.log(car1); // Outputs the car1 object with all its properties

let car2: {
  name: string;
  color: string;
  horsepower: number;
  powerstearing: string;
} = {
  name: "corolla",
  color: "black",
  horsepower: 1600,
  powerstearing: "true",
};
console.log(car2); // Outputs the car2 object with all its properties

// Defining a custom type for Employee
type Employee = {
  name: string;
  age: number;
  isAdmin: boolean;
};

let employee1: Employee = {
  name: "Owais",
  age: 20,
  isAdmin: true,
};

let employee: Employee = {
  name: "Wajid",
  age: 21,
  isAdmin: true,
};

// Defining a custom type for Student
type Student = {
  name: string;
  age: number;
  isCR: boolean;
};

// Code With FM => FAYAZ MOOSANI
