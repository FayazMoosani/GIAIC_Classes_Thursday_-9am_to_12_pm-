// Class 11
// Objects
const product = {
    title: "Watch",
    desc: "This is a watch",
    price: 2000,
    isAvailable: true,
};
console.log(product); // Outputs the product object with all its properties
// Objects: Type 01 - Simple Nested List
const student = {
    name: "Wajid",
    standard: "MSC",
    gender: "Male",
    address: "Kandhkot",
    postalCode: "79160",
    street: "08",
};
console.log(student); // Outputs the student object with all its properties
// Objects: Type 02 - Create Nested List with a child nested list
const student1 = {
    name: "Fayaz",
    standard: "MSC",
    gender: "Male",
    address: {
        street: "Street # 08",
        postalCode: "79160",
        city: "Kandhkot",
        Distric: "Kashmore",
        Division: "Larkana",
    },
};
console.log(student1); // Outputs the student1 object with nested address properties
// Product of Platinum and details of the product
const cefpower = {
    brandName: "Cefpower 100mg",
    title: "Platinum Pharmaceuticals",
    Price: 400,
    description: "This is a Tablet of Pharmaceuticals (Pvt) Ltd.",
    type: {
        box: "10 Tablets in 1 Box",
        strength: "200MG",
        Dosage: "BD",
    },
};
console.log(cefpower); // Outputs the cefpower object with all its properties
const student2 = {
    bio: {
        name: "Fayaz",
        gender: "Male",
        age: 23,
    },
    department: {
        depName: "Political Science",
        faculty: "BA",
    },
};
console.log(student2); // Outputs the student2 object with nested bio and department properties
const student3 = {
    bio: {
        name: "Fayaz",
        gender: "Male",
        age: 23,
    },
    department: {
        depName: "Political Science",
        faculty: "BA",
    },
};
console.log(student3.bio.name); // Outputs: Fayaz
console.log(student3.department.faculty); // Outputs: BA
console.log(Object.keys(student3.bio)); // Outputs: ["name", "gender", "age"]
console.log(Object.keys(student3)); // Outputs: ["bio", "department"]
const student4 = {
    bio: {
        name: "Fayaz",
        gender: "Male",
        age: 23,
    },
    department: {
        depName: "Political Science",
        faculty: "BA",
    },
};
console.log(Object.values(student4)); // Outputs the values of the student4 object
const student5 = {
    bio: {
        name: "Fayaz",
        gender: "Male",
        age: 23,
    },
    department: {
        depName: "Political Science",
        faculty: "BA",
    },
};
console.log(Object.entries(student5)); // Outputs both keys and values of the student5 object
// Normal function
const greed = () => {
    console.log("Hello");
};
greed(); // Calls the greed function and outputs: Hello
// Object with Function
const student6 = {
    name: "Fayaz",
    dob: 2000,
    gender: "Male",
    callName: function () {
        console.log("Hello Dear");
    },
};
student6.callName(); // Calls the callName function and outputs: Hello Dear
console.log(student6.name); // Outputs: Fayaz
// Functions and Objects
const student7 = {
    name: "Fayaz",
    dob: 2000,
    gender: "Male",
    callName: function () {
        console.log("Hello Dear");
    },
};
student7.callName(); // Calls the callName function and outputs: Hello Dear
console.log(student7); // Outputs the student7 object with all its properties
export {};
// Code With FM => Fayaz Moosani
