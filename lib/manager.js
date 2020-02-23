// const employee = require("./employee")
// const engineer = new employee(name, idNumber, gitHubUserName, emailAddress, confirmType);
// const inquirer = require("inquirer")

const managerQuestions = [{
    type: "input",
    name: "name",
    message: "Please enter their Name:"
},
{
    type: "input",
    name: "idNumber",
    message: "Please enter their ID number:"
},
{
    type: "input",
    name: "officeNumber", // manager!!!
    message: "Please enter their office number?",
},
{
    type: "input",
    name: "emailAddress",
    message: "Please enter their email:"
},
{
    type: "confirm",
    name: "confirmType",
    message: "Would you like to add another employee?",
},
];
