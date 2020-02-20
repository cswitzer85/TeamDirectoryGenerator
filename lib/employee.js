const inquirer = require("inquirer")

// class Employee {
// 	constructor(employeeType, name, idNumber, gitHubUserName, schoolName, emailAddress, confrimType) {
// 		this.employeeType = employeeType;
// 		this.name = name;
// 		this.idNumber = idNumber;
// 		this.officeNumber = officeNumber
// 		this.gitHubUserName = gitHubUserName;
// 		this.schoolName = schooleName;
// 		this.emailAddress = emailAddress;
// 		this.confirmType = confirmType;
// 	}

function promptUser() {
	inquirer
		.prompt([{
			type: "list",
			name: "employeeType",
			message: "What type of employee would you like to add?",
			choices: ["Manager", "Intern", "Engineer"],
			
		},
		{
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
			when: function () {
				return promptUser.employeeType == "Manager";
			}
		},
		{
			type: "input",
			name: "gitHubUserName", // engineer!!!
			message: "What is their GitHub user name?",
			when: function () {
				return promptUser.employeeType == "Engineer";
			}

		},
		{
			type: "input",
			name: "schoolName", // intern!!!
			message: "Please enter their school?",
			when: function () {
				return promptUser.employeeType == "Intern";
			}
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
	])
	
	function printInfo() {
		console.log(`Employee Type: ${this.employeeType}`);
		console.log(`Name: ${this.name}`);
		console.log(`ID: ${this.idNumber}`);
		console.log(`Office Number: ${this.officeNumber}`);
		console.log(`GitHub User Name: ${this.gitHubUserName}`);
		console.log(`School Name: ${this.schoolName}`);
		console.log(`Email Address: ${this.emailAddress}`);
		console.log(`Create a new employee: ${this.confirmType}`);
	}

	// var newEmployee = new employee;
var newEmployee = await promptUser;