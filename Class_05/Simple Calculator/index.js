import inquirer from "inquirer";
// Asking questions from users through inquirer
const answers = await inquirer.prompt([
    {
        message: "Enter First Number", // Message displayed to the user
        type: "number", // Expecting a numeric input
        name: "firstNumber" // Name of the response field
    },
    {
        message: "Enter Second Number", // Message displayed to the user
        type: "number", // Expecting a numeric input
        name: "secondNumber" // Name of the response field
    },
    {
        name: "operator", // Name of the response field
        message: "Select operation you want to perform: ", // Message displayed to the user
        type: "list", // Expecting a selection from a list
        choices: ["Addition", "Subtraction", "Multiplication", "Division"], // List of operations to choose from
    },
]);
// Conditional statements If-Else to perform the selected operation
if (answers.operator === "Addition") {
    // Perform addition if the user selected "Addition"
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.operator === "Subtraction") {
    // Perform subtraction if the user selected "Subtraction"
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.operator === "Multiplication") {
    // Perform multiplication if the user selected "Multiplication"
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.operator === "Division") {
    // Perform division if the user selected "Division"
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    // Handle any invalid input (although it should not reach here due to predefined choices)
    console.log("Invalid Input");
}
// Code with FM => FAYAZ MOOSANI
