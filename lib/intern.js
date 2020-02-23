// const employee = require("./employee")
// const engineer = new employee(name, idNumber, gitHubUserName, emailAddress, confirmType);
// const inquirer = require("inquirer")

const internQuestions = [{
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
	name: "schoolName", // intern!!!
	message: "Please enter their school?",
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
