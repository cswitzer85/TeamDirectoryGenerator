const inquirer = require("inquirer")

function promptUser() {
	return inquirer.prompt([{
			type: "list",
			name: "employeeType",
			message: "What type of employee would you like to add?",
			choices: ["Intern", "Engineer"]
		},
    ]);
}

    promptUser();
