const express = require("express");
const fs = require('fs');
const inquirer = require("inquirer")
// const path = require("path");
// const employee = require("./lib/employee.js")(app);
// const engineerLib = require("./lib/engineer.js")(app);
// const internLib = equire("./lib/intern.js")(app);
// const managerLib = require("./lib/manager.js")(app);
var app = express();
var PORT = process.env.PORT || 9001;
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());


// app.listen(PORT, function () {
// 	console.log("App listening on PORT: " + PORT);
// });
function promptEmployee() {
	console.log("starting promptEmployee");
	inquirer
		.prompt(employeeQuestion)
	console.log("end of promptEmployee");
};


function promptEngineer() {
	console.log("starting promptEngineer");
	inquirer
		.prompt(engineerQuestions)
	console.log("end of promptEngineer");
};

function promptIntern(engineerAnswers) {
	console.log("starting promptIntern");
	inquirer
		.prompt(internQuestions)
	console.log("end of promptIntern");
};

function promptManager(engineerAnswers) {
	console.log("starting promptManager");
	inquirer
		.prompt(managerQuestions)
	console.log("end of promptManager");
};

function getEmployeePrompt(answers) {
	console.log("starting getEmployeePrompt");
	if (answers.employeeType === "manager") {
		console.log("manager chosen")
		initManager();
	} else if (answers.employeeType === "Intern") {
		console.log("Intern chosen")
		initIntern();
	} else {
		console.log("Engineer chosen");
		promptEngineer();
	}
};

function promptUser(answers) {
			console.log("starting promptUser");
			inquirer.prompt([{
        type: "confirm",
        name: "confirmNewEmployee",
        message: "Would you like to add an employee?"
      }, {
        when: function (response) {
            return response.confirmNewEmployee;
        },
            type: "list",
            name: "employeeType",
            message: "What type of employee would you like to add?",
            choices: ["Manager", "Intern", "Engineer", "No more, I'm done"]
          
    }], function (response) {})
  };
    
   
		async function init() {
			try {
				var newEmployee = await promptUser();
			} catch (err) {
				console.log(err);
			}
    };


		init();
