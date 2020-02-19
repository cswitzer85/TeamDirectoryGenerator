const inquirer = require("inquirer")

function promptUser() {
	return inquirer.prompt([{
			type: "input",
			name: "name",
			message: "Hey Mr./Mrs. Manager, what is your name?"
		},
		{
			type: "input",
			name: "idNumber",
			message: "What is your ID number?"
        },
        {
			type: "input",
			name: "officeNumber",
			message: "What is your office number?"
        },
        {
			type: "input",
			name: "emailAddress",
			message: "What is your e-mail address?"
        },
        {
			type: "confirm",
			name: "confirmType",
			message: "Would you like to add another employee?",
			default: false
		},
	]);}
	
	promptUser();