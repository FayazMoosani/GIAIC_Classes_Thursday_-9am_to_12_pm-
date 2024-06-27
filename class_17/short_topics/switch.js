// switch case

// Declare a constant variable for the day of the week
const dayOftheWeek = "Thursday";

// Use a switch statement to match the value of dayOftheWeek with different cases
switch(dayOftheWeek) {
    case "Monday":
        // If dayOftheWeek is "Monday", log the following message to the console
        console.log("Your day is Monday");
        break; // Exit the switch statement

    case "Teusday":
        // If dayOftheWeek is "Teusday", log the following message to the console
        console.log("Your day is Teusday");
        break; // Exit the switch statement

    case "Wednesday":
        // If dayOftheWeek is "Wednesday", log the following message to the console
        console.log("Your day is Wednesday");
        break; // Exit the switch statement

    case "Thursday":
        // If dayOftheWeek is "Thursday", log the following message to the console
        console.log("Your day is Thursday");
        break; // Exit the switch statement

    case "Friday":
        // If dayOftheWeek is "Friday", log the following message to the console
        console.log("Your day is Friday");
        break; // Exit the switch statement

    case "Saturday":
        // If dayOftheWeek is "Saturday", log the following message to the console
        console.log("Your day is Saturday");
        break; // Exit the switch statement

    case "Sunday":
        // If dayOftheWeek is "Sunday", log the following message to the console
        console.log("Your day is Sunday");
        break; // Exit the switch statement

    default:
        // This default case will execute if none of the above cases match
        console.log("Invalid day");
        break; // Exit the switch statement
}

const yourAge = 12;

// Switch statement based on the value of yourAge
switch(yourAge) {
    case 18:
        // If yourAge is 18, log the following message
        console.log("You are now eligible for this course");
        break;
    case 12:
        // If yourAge is 12, log the following message
        console.log("You are too young for this course");
        break;
    case 50:
        // If yourAge is 50, log the following message
        console.log("You are too old for this course");
        break;
}

const obtainMarks = 75;

// Switch statement based on boolean conditions (using true as switch expression)
switch (true) {
    case obtainMarks >= 80:
        // If obtainMarks is 80 or more, log the following message
        console.log("Congratulations, you secured A+");
        break;
    case obtainMarks >= 70 && obtainMarks < 80:
        // If obtainMarks is between 70 and 79, log the following message
        console.log("Congratulations, you secured A");
        break;
    case obtainMarks >= 60 && obtainMarks < 70:
        // If obtainMarks is between 60 and 69, log the following message
        console.log("Congratulations, you secured B");
        break;
    default:
        // If none of the above conditions match, log the following message
        console.log("You have failed");
}
