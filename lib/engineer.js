const inquirer = require("inquirer")


function promptEngineer() {
	return inquirer.prompt([{
			type: "input",
			name: "name",
			message: "What is the name of your engineer?"
		},
		{
			type: "input",
			name: "idNumber",
			message: "What is their ID number?"
        },
        {
			type: "input",
			name: "GitHubUserName",
			message: "What is their GitHub user name?"
        },
        {
			type: "input",
			name: "emailAddress",
			message: "What is their e-mail address?"
        },
        {
			type: "confirm",
			name: "confirmType",
            message: "Would you like to add another employee?",
            when: function(){
                return promptEngineer.confirmType === true
            }
		},
    ]);}

	promptEngineer();